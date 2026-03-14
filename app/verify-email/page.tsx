'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get('email');
  const error = searchParams.get('error');
  const [isResending, setIsResending] = useState(false);
  const [resendMessage, setResendMessage] = useState('');

  const handleResendEmail = async () => {
    if (!email) return;

    setIsResending(true);
    try {
      const response = await fetch('/api/auth/resend-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setResendMessage('Verification email sent! Check your inbox.');
      } else {
        setResendMessage('Failed to resend email. Please try again.');
      }
    } catch (error) {
      setResendMessage('Failed to resend email. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-slate-50 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-8 relative z-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {error === 'not_verified' ? 'Email not verified' : 'Check your email'}
          </h1>
          <p className="text-slate-500 mt-2 font-medium">
            {error === 'not_verified'
              ? 'You need to verify your email before signing in.'
              : `We've sent a verification link to ${email}`
            }
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-blue-900">What to do next:</p>
                <ol className="mt-2 space-y-1 text-blue-800">
                  <li>1. Open your email inbox</li>
                  <li>2. Look for an email from us</li>
                  <li>3. Click the "Verify Email" link</li>
                  <li>4. You'll be redirected back here automatically</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-amber-900">Didn't receive the email?</p>
                <ul className="mt-2 space-y-1 text-amber-800">
                  <li>• Check your spam/junk folder</li>
                  <li>• Make sure {email} is correct</li>
                  <li>• Wait a few minutes for delivery</li>
                </ul>
              </div>
            </div>
          </div>

          <button
            onClick={handleResendEmail}
            disabled={isResending}
            className="w-full flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-bold py-4 rounded-xl transition-all"
          >
            {isResending ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Mail className="w-5 h-5" />
                Resend verification email
              </>
            )}
          </button>

          {resendMessage && (
            <div className={`text-center text-sm font-medium ${
              resendMessage.includes('sent') ? 'text-green-600' : 'text-red-600'
            }`}>
              {resendMessage}
            </div>
          )}

          <div className="text-center">
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
            >
              ← Back to sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}