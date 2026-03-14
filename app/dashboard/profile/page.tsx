'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { User, Mail, MapPin, Lock, Eye, EyeOff, Check, X, ArrowLeft, Save } from 'lucide-react';

export default function ProfilePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    country: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [activeTab, setActiveTab] = useState<'profile' | 'password'>('profile');
  const [message, setMessage] = useState('');

  // Password validation for new password
  const passwordRules = {
    length: formData.newPassword.length >= 10,
    uppercase: /[A-Z]/.test(formData.newPassword),
    lowercase: /[a-z]/.test(formData.newPassword),
    number: /\d/.test(formData.newPassword),
    symbol: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(formData.newPassword)
  };

  const allPasswordRulesMet = Object.values(passwordRules).every(rule => rule);
  const passwordsMatch = formData.newPassword === formData.confirmNewPassword && formData.newPassword !== '';

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('/api/auth/profile');
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        setFormData({
          full_name: userData.user_metadata?.full_name || '',
          email: userData.email || '',
          country: userData.user_metadata?.country || '',
          currentPassword: '',
          newPassword: '',
          confirmNewPassword: ''
        });
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage('');

    try {
      const response = await fetch('/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.full_name,
          country: formData.country
        }),
      });

      if (response.ok) {
        setMessage('Profile updated successfully!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        const data = await response.json();
        setMessage(data.error || 'Failed to update profile');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage('');

    if (!allPasswordRulesMet) {
      setMessage('New password does not meet requirements');
      setIsSaving(false);
      return;
    }

    if (!passwordsMatch) {
      setMessage('New passwords do not match');
      setIsSaving(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/change-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword
        }),
      });

      if (response.ok) {
        setMessage('Password updated successfully!');
        setFormData(prev => ({
          ...prev,
          currentPassword: '',
          newPassword: '',
          confirmNewPassword: ''
        }));
        setTimeout(() => setMessage(''), 3000);
      } else {
        const data = await response.json();
        setMessage(data.error || 'Failed to update password');
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
            <h1 className="text-3xl font-bold text-slate-800">Account Settings</h1>
            <p className="text-slate-500 mt-1">Manage your account information and security</p>
          </div>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-xl ${
            message.includes('success') ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {message}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 mb-8">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'profile'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Profile Information
          </button>
          <button
            onClick={() => setActiveTab('password')}
            className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'password'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Change Password
          </button>
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
            <form onSubmit={handleProfileUpdate} className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.full_name}
                  onChange={(e) => handleInputChange('full_name', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  disabled
                  className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-500 cursor-not-allowed"
                />
                <p className="text-xs text-slate-500">Email cannot be changed. Contact support if needed.</p>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Country
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                >
                  <option value="">Select your country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="JP">Japan</option>
                  <option value="IN">India</option>
                  <option value="BR">Brazil</option>
                  <option value="MX">Mexico</option>
                  <option value="ZA">South Africa</option>
                  <option value="NG">Nigeria</option>
                  <option value="EG">Egypt</option>
                  <option value="KE">Kenya</option>
                  <option value="GH">Ghana</option>
                  <option value="RW">Rwanda</option>
                  <option value="UG">Uganda</option>
                  <option value="TZ">Tanzania</option>
                  <option value="ZW">Zimbabwe</option>
                  <option value="ZM">Zambia</option>
                  <option value="BW">Botswana</option>
                  <option value="NA">Namibia</option>
                  <option value="MZ">Mozambique</option>
                  <option value="AO">Angola</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSaving}
                className="w-full py-3.5 px-4 bg-[#2E5BFF] hover:bg-blue-700 disabled:bg-slate-400 text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Save Changes
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {/* Password Tab */}
        {activeTab === 'password' && (
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
            <form onSubmit={handlePasswordUpdate} className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.current ? "text" : "password"}
                    value={formData.currentPassword}
                    onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                    className="w-full px-4 py-3 pr-12 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                    placeholder="Enter current password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswords(prev => ({ ...prev, current: !prev.current }))}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPasswords.current ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.new ? "text" : "password"}
                    value={formData.newPassword}
                    onChange={(e) => handleInputChange('newPassword', e.target.value)}
                    className="w-full px-4 py-3 pr-12 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                    placeholder="Enter new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswords(prev => ({ ...prev, new: !prev.new }))}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPasswords.new ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {/* Password Requirements */}
                {formData.newPassword && (
                  <div className="space-y-1 mt-2">
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
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.confirm ? "text" : "password"}
                    value={formData.confirmNewPassword}
                    onChange={(e) => handleInputChange('confirmNewPassword', e.target.value)}
                    className="w-full px-4 py-3 pr-12 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                    placeholder="Confirm new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswords(prev => ({ ...prev, confirm: !prev.confirm }))}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPasswords.confirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {formData.confirmNewPassword && !passwordsMatch && (
                  <p className="text-xs text-red-600">Passwords do not match</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSaving || !allPasswordRulesMet || !passwordsMatch}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 ${
                  allPasswordRulesMet && passwordsMatch
                    ? 'bg-[#2E5BFF] hover:bg-blue-700 text-white shadow-blue-500/20'
                    : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                }`}
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Updating...
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    Update Password
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}