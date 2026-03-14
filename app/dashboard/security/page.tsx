'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Shield, Smartphone, Mail, ArrowLeft, Check, X, AlertTriangle } from 'lucide-react';

export default function TwoFactorPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [method, setMethod] = useState<'sms' | 'email' | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [message, setMessage] = useState('');
  const [backupCodes, setBackupCodes] = useState<string[]>([]);

  useEffect(() => {
    fetchTwoFactorStatus();
  }, []);

  const fetchTwoFactorStatus = async () => {
    try {
      const response = await fetch('/api/auth/2fa/status');
      if (response.ok) {
        const data = await response.json();
        setTwoFactorEnabled(data.enabled);
        setMethod(data.method);
        setPhoneNumber(data.phoneNumber || '');
      }
    } catch (error) {
      console.error('Error fetching 2FA status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEnable2FA = async () => {
    if (!method) {
      setMessage('Please select a 2FA method');
      return;
    }

    if (method === 'sms' && !phoneNumber) {
      setMessage('Please enter your phone number');
      return;
    }

    setIsSaving(true);
    setMessage('');

    try {
      const response = await fetch('/api/auth/2fa/enable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          method,
          phoneNumber: method === 'sms' ? phoneNumber : undefined
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setBackupCodes(data.backupCodes);
        setShowVerification(true);
        setMessage('Verification code sent. Please check your ' + (method === 'sms' ? 'phone' : 'email'));
      } else {
        const data = await response.json();
        setMessage(data.error || 'Failed to enable 2FA');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode) {
      setMessage('Please enter the verification code');
      return;
    }

    setIsSaving(true);
    setMessage('');

    try {
      const response = await fetch('/api/auth/2fa/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: verificationCode
        }),
      });

      if (response.ok) {
        setTwoFactorEnabled(true);
        setShowVerification(false);
        setMessage('2FA enabled successfully! Save your backup codes in a safe place.');
        setTimeout(() => setMessage(''), 5000);
      } else {
        const data = await response.json();
        setMessage(data.error || 'Invalid verification code');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDisable2FA = async () => {
    if (!confirm('Are you sure you want to disable 2FA? This will make your account less secure.')) {
      return;
    }

    setIsSaving(true);
    setMessage('');

    try {
      const response = await fetch('/api/auth/2fa/disable', {
        method: 'POST',
      });

      if (response.ok) {
        setTwoFactorEnabled(false);
        setMethod(null);
        setPhoneNumber('');
        setBackupCodes([]);
        setMessage('2FA disabled successfully');
        setTimeout(() => setMessage(''), 3000);
      } else {
        const data = await response.json();
        setMessage(data.error || 'Failed to disable 2FA');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleRegenerateBackupCodes = async () => {
    setIsSaving(true);
    setMessage('');

    try {
      const response = await fetch('/api/auth/2fa/backup-codes', {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        setBackupCodes(data.backupCodes);
        setMessage('Backup codes regenerated successfully');
        setTimeout(() => setMessage(''), 3000);
      } else {
        const data = await response.json();
        setMessage(data.error || 'Failed to regenerate backup codes');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="py-16 px-6 min-h-[80vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="py-16 px-6 min-h-[80vh]">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/dashboard"
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Two-Factor Authentication</h1>
            <p className="text-slate-500 mt-1">Add an extra layer of security to your account</p>
          </div>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-xl ${
            message.includes('success') ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {message}
          </div>
        )}

        {/* Current Status */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                twoFactorEnabled ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'
              }`}>
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Two-Factor Authentication</h3>
                <p className="text-slate-500">
                  {twoFactorEnabled
                    ? `Enabled via ${method === 'sms' ? 'SMS' : 'Email'}`
                    : 'Not enabled'
                  }
                </p>
              </div>
            </div>
            <div className={`px-4 py-2 rounded-full text-sm font-bold ${
              twoFactorEnabled ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-600'
            }`}>
              {twoFactorEnabled ? 'Enabled' : 'Disabled'}
            </div>
          </div>
        </div>

        {/* Setup 2FA */}
        {!twoFactorEnabled && !showVerification && (
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Enable Two-Factor Authentication</h3>

            <div className="space-y-6">
              {/* Method Selection */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700">Choose a method:</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    method === 'sms' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300'
                  }`}>
                    <input
                      type="radio"
                      name="method"
                      value="sms"
                      checked={method === 'sms'}
                      onChange={(e) => setMethod(e.target.value as 'sms')}
                      className="w-4 h-4 text-blue-600"
                    />
                    <Smartphone className="w-5 h-5 text-slate-600" />
                    <div>
                      <div className="font-semibold text-slate-800">SMS</div>
                      <div className="text-sm text-slate-500">Receive codes via text message</div>
                    </div>
                  </label>

                  <label className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    method === 'email' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300'
                  }`}>
                    <input
                      type="radio"
                      name="method"
                      value="email"
                      checked={method === 'email'}
                      onChange={(e) => setMethod(e.target.value as 'email')}
                      className="w-4 h-4 text-blue-600"
                    />
                    <Mail className="w-5 h-5 text-slate-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Email</div>
                      <div className="text-sm text-slate-500">Receive codes via email</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Phone Number Input */}
              {method === 'sms' && (
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                  <p className="text-xs text-slate-500">Enter your phone number with country code</p>
                </div>
              )}

              <button
                onClick={handleEnable2FA}
                disabled={isSaving || !method || (method === 'sms' && !phoneNumber)}
                className="w-full py-3.5 px-4 bg-[#2E5BFF] hover:bg-blue-700 disabled:bg-slate-400 text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Setting up...
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4" />
                    Enable 2FA
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Verification Code Input */}
        {showVerification && (
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Verify Your Code</h3>

            <div className="space-y-6">
              <div className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  method === 'sms' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                }`}>
                  {method === 'sms' ? <Smartphone className="w-8 h-8" /> : <Mail className="w-8 h-8" />}
                </div>
                <p className="text-slate-600">
                  We sent a verification code to your {method === 'sms' ? 'phone' : 'email'}.
                  Enter it below to complete setup.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Verification Code</label>
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-center text-2xl font-mono tracking-widest"
                  placeholder="000000"
                  maxLength={6}
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setShowVerification(false);
                    setVerificationCode('');
                  }}
                  className="flex-1 py-3.5 px-4 border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleVerifyCode}
                  disabled={isSaving || verificationCode.length !== 6}
                  className="flex-1 py-3.5 px-4 bg-[#2E5BFF] hover:bg-blue-700 disabled:bg-slate-400 text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
                >
                  {isSaving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Verifying...
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      Verify
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Backup Codes */}
        {twoFactorEnabled && backupCodes.length > 0 && (
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-800">Backup Codes</h3>
              <button
                onClick={handleRegenerateBackupCodes}
                disabled={isSaving}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium text-sm transition-colors"
              >
                Regenerate
              </button>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-800">Important</h4>
                  <p className="text-sm text-amber-700 mt-1">
                    Save these backup codes in a safe place. You can use them to access your account if you lose access to your {method === 'sms' ? 'phone' : 'email'}.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {backupCodes.map((code, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                  <code className="font-mono text-sm text-slate-800">{code}</code>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disable 2FA */}
        {twoFactorEnabled && (
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Disable Two-Factor Authentication</h3>
            <p className="text-slate-600 mb-6">
              Disabling 2FA will make your account less secure. We recommend keeping it enabled.
            </p>

            <button
              onClick={handleDisable2FA}
              disabled={isSaving}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-red-500/20 flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Disable 2FA
            </button>
          </div>
        )}
      </div>
    </div>
  );
}