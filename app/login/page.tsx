import Link from 'next/link';
import { login, signup, signInWithGoogle } from './actions';

export default async function LoginPage(props: {
  searchParams: Promise<{ error?: string; email?: string }>;
}) {
  const searchParams = await props.searchParams;
  const error = searchParams.error;
  const email = searchParams.email;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f7ff] to-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-blue-50 p-8 space-y-6">
        
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-[#1e3a8a] tracking-tight">Welcome Back</h1>
          <p className="text-slate-500 mt-2">Manage your inbox with intelligence</p>
        </div>

        {/* --- CUSTOM DIALOG BOX (Matching your card style) --- */}
        {error === 'user_exists' && (
          <div className="relative overflow-hidden bg-blue-50 border-l-4 border-[#3b82f6] p-6 rounded-xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {/* A friendly checkmark icon */}
                <svg className="h-6 w-6 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-bold text-[#1e3a8a]">Account already found!</h3>
                <div className="mt-2 text-sm text-slate-600">
                  <p>It looks like <strong>{email}</strong> is already part of the family.</p>
                </div>
                <div className="mt-4">
                  <Link 
                    href="/dashboard"
                    className="inline-flex items-center px-4 py-2 bg-[#3b82f6] text-white text-sm font-semibold rounded-lg hover:bg-[#2563eb] transition-colors shadow-md"
                  >
                    Go to Dashboard
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {error === 'auth_failed' && (
          <div className="p-4 mb-4 text-sm text-red-800 bg-red-100 border border-red-200 rounded-lg">
            Authentication failed. Please check your credentials.
          </div>
        )}

        {/* --- YOUR LOGIN FORM CONTINUES --- */}
        <form className="space-y-4">
          <input name="email" type="email" placeholder="Email" required className="w-full p-2 border rounded" />
          <input name="password" type="password" placeholder="Password" required className="w-full p-2 border rounded" />
          
          <div className="flex gap-2">
            <button formAction={login} className="flex-1 px-4 py-2 text-white bg-blue-600 rounded">Sign In</button>
            <button formAction={signup} className="flex-1 px-4 py-2 text-white bg-green-600 rounded">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}