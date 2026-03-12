'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white p-6">
      <div className="bg-[#161616] border border-white/10 p-8 rounded-2xl max-w-sm w-full text-center shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">Connection Issue</h2>
        <p className="text-gray-400 mb-6 text-sm">
          We couldn't reach the server. This usually happens due to a network glitch.
        </p>
        <button
          onClick={() => reset()}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In a real-world app, you'd log this to a service like Sentry or LogRocket
    console.error('CRITICAL_APP_ERROR:', error);
  }, [error]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md">
      <div className="max-w-md p-8 text-center bg-[#161616] border border-white/10 rounded-2xl shadow-2xl">
        <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 text-red-500">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-white mb-2">Something went wrong</h2>
        <p className="text-gray-400 text-sm mb-6">
          We encountered a connection issue or a system error. 
          {error.message && <span className="block mt-2 font-mono text-xs text-red-400 opacity-60 italic">{error.message}</span>}
        </p>
        <button
          onClick={() => reset()} // The "Try Again" logic
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
