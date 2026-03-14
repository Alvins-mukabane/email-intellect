'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, Check, X, Lock } from 'lucide-react';

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Password validation rules
  const passwordRules = {
    length: formData.password.length >= 10,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /\d/.test(formData.password),
    symbol: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(formData.password)
  };

  const allPasswordRulesMet = Object.values(passwordRules).every(rule => rule);
  const passwordsMatch = formData.password === formData.confirmPassword && formData.password !== '';
  const isFormValid = allPasswordRulesMet && passwordsMatch;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!isFormValid) {
      setError('Please ensure all password requirements are met and passwords match.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: formData.password,
          accessToken: searchParams.get('access_token'),
          refreshToken: searchParams.get('refresh_token')
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          router.push('/login?message=password_reset');
        }, 2000);
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to reset password');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-slate-50">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Password reset successful!</h1>
          <p className="text-slate-500 font-medium mb-6">
            Your password has been updated. Redirecting you to sign in...
          </p>
          <Link
            href="/login"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Continue to sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-8 relative z-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Set new password</h1>
          <p className="text-slate-500 mt-2 font-medium">
            Enter your new password below.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full px-4 py-3 pr-12 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Password Requirements */}
            {formData.password && (
              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    {passwordRules.length ? <Check className="w-3 h-3 text-green-600" /> : <X className="w-3 h-3 text-red-400" />}
                    <span className={passwordRules.length ? 'text-green-700' : 'text-slate-500'}>At least 10 characters</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    {passwordRules.uppercase ? <Check className="w-3 h-3 text-green-600" /> : <X className="w-3 h-3 text-red-400" />}
                    <span className={passwordRules.uppercase ? 'text-green-700' : 'text-slate-500'}>One uppercase letter</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    {passwordRules.lowercase ? <Check className="w-3 h-3 text-green-600" /> : <X className="w-3 h-3 text-red-400" />}
                    <span className={passwordRules.lowercase ? 'text-green-700' : 'text-slate-500'}>One lowercase letter</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    {passwordRules.number ? <Check className="w-3 h-3 text-green-600" /> : <X className="w-3 h-3 text-red-400" />}
                    <span className={passwordRules.number ? 'text-green-700' : 'text-slate-500'}>One number</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    {passwordRules.symbol ? <Check className="w-3 h-3 text-green-600" /> : <X className="w-3 h-3 text-red-400" />}
                    <span className={passwordRules.symbol ? 'text-green-700' : 'text-slate-500'}>One special character</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700">Confirm New Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="w-full px-4 py-3 pr-12 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {formData.confirmPassword && !passwordsMatch && (
              <p className="text-xs text-red-600">Passwords do not match</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !isFormValid}
            className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 mt-4 ${
              isFormValid
                ? 'bg-[#2E5BFF] hover:bg-blue-700 text-white shadow-blue-500/20'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Updating...
              </>
            ) : (
              'Update password'
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/login"
            className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
          >
            ← Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}