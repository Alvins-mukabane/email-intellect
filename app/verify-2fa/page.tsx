'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Shield, Smartphone, Mail, ArrowLeft, Check, AlertTriangle } from 'lucide-react';

export default function Verify2FAPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isVerifying, setIsVerifying] = useState(false);
  const [method, setMethod] = useState<'sms' | 'email' | null>(null);
  const [code, setCode] = useState('');
  const [backupCode, setBackupCode] = useState('');
  const [useBackupCode, setUseBackupCode] = useState(false);
  const [message, setMessage] = useState('');
  const [resendDisabled, setResendDisabled] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);

  useEffect(() => {
    fetchUser2FAMethod();
  }, []);

  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCountdown]);

  const fetchUser2FAMethod = async () => {
    try {
      const response = await fetch('/api/auth/2fa/status');
      if (response.ok) {
        const data = await response.json();
        setMethod(data.method);
      } else {
        // If we can't get 2FA status, redirect to login
        router.push('/login');
      }
    } catch (error) {
      console.error('Error fetching 2FA method:', error);
      router.push('/login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setMessage('');

    const verificationCode = useBackupCode ? backupCode : code;

    if (!verificationCode) {
      setMessage('Please enter a verification code');
      setIsVerifying(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/2fa/verify-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: verificationCode,
          useBackupCode
        }),
      });

      if (response.ok) {
        router.push('/dashboard');
      } else {
        const data = await response.json();
        setMessage(data.error || 'Invalid verification code');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendCode = async () => {
    setResendDisabled(true);
    setResendCountdown(60); // 60 second cooldown
    setMessage('');

    try {
      const response = await fetch('/api/auth/2fa/resend', {
        method: 'POST',
      });

      if (response.ok) {
        setMessage('Verification code sent successfully');
      } else {
        const data = await response.json();
        setMessage(data.error || 'Failed to resend code');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    }

    // Re-enable resend after 60 seconds
    setTimeout(() => setResendDisabled(false), 60000);
  };

  if (isLoading) {
    return (
      <div className="py-16 px-6 min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="py-16 px-6 min-h-screen bg-slate-50">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Two-Factor Authentication</h1>
          <p className="text-slate-500 mt-2">Enter your verification code to continue</p>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-xl ${
            message.includes('success') || message.includes('sent') ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {message}
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
          <form onSubmit={handleVerifyCode} className="space-y-6">
            {/* Method Display */}
            <div className="text-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                method === 'sms' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
              }`}>
                {method === 'sms' ? <Smartphone className="w-6 h-6" /> : <Mail className="w-6 h-6" />}
              </div>
              <p className="text-sm text-slate-600">
                {method === 'sms'
                  ? 'We sent a verification code to your phone'
                  : 'We sent a verification code to your email'
                }
              </p>
            </div>

            {/* Code Input */}
            {!useBackupCode ? (
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Verification Code</label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-center text-2xl font-mono tracking-widest"
                  placeholder="000000"
                  maxLength={6}
                />
              </div>
            ) : (
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Backup Code</label>
                <input
                  type="text"
                  value={backupCode}
                  onChange={(e) => setBackupCode(e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-center font-mono"
                  placeholder="ABCD-1234"
                />
                <p className="text-xs text-slate-500">Enter one of your backup codes</p>
              </div>
            )}

            {/* Toggle Backup Code */}
            <button
              type="button"
              onClick={() => {
                setUseBackupCode(!useBackupCode);
                setCode('');
                setBackupCode('');
              }}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              {useBackupCode ? 'Use verification code instead' : 'Use backup code instead'}
            </button>

            {/* Verify Button */}
            <button
              type="submit"
              disabled={isVerifying || (!useBackupCode && code.length !== 6) || (useBackupCode && !backupCode)}
              className="w-full py-3.5 px-4 bg-[#2E5BFF] hover:bg-blue-700 disabled:bg-slate-400 text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              {isVerifying ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Verifying...
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  Verify & Continue
                </>
              )}
            </button>

            {/* Resend Code */}
            {!useBackupCode && (
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendCode}
                  disabled={resendDisabled || resendCountdown > 0}
                  className="text-sm text-slate-500 hover:text-slate-700 disabled:text-slate-300 font-medium disabled:cursor-not-allowed"
                >
                  {resendCountdown > 0 ? `Resend code in ${resendCountdown}s` : 'Resend verification code'}
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Warning for Backup Codes */}
        {useBackupCode && (
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-800">Backup Code Warning</h4>
                <p className="text-sm text-amber-700 mt-1">
                  Each backup code can only be used once. Make sure you have access to your primary verification method.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Back to Login */}
        <div className="text-center mt-8">
          <Link
            href="/login"
            className="text-sm text-slate-500 hover:text-slate-700 font-medium inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}