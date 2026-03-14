'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signup, signInWithGoogle } from './actions';
import { Eye, EyeOff, Check, X } from 'lucide-react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    country: false,
    password: false,
    confirmPassword: false
  });

  // Password validation rules
  const passwordRules = {
    length: formData.password.length >= 10,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /\d/.test(formData.password),
    symbol: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(formData.password)
  };

  const allPasswordRulesMet = Object.values(passwordRules).every(rule => rule);

  // Password strength calculation
  const getPasswordStrength = () => {
    const metRules = Object.values(passwordRules).filter(Boolean).length;
    if (metRules <= 2) return { level: 'weak', color: 'bg-red-500', text: 'Weak' };
    if (metRules <= 4) return { level: 'medium', color: 'bg-yellow-500', text: 'Medium' };
    return { level: 'strong', color: 'bg-green-500', text: 'Strong' };
  };

  const passwordStrength = getPasswordStrength();

  // Form validation
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const passwordsMatch = formData.password === formData.confirmPassword && formData.password !== '';
  const isFormValid = formData.name.trim() !== '' &&
                     isEmailValid &&
                     formData.country !== '' &&
                     allPasswordRulesMet &&
                     passwordsMatch;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: string[] = [];

    if (!formData.name.trim()) newErrors.push('Full name is required');
    if (!isEmailValid) newErrors.push('Please enter a valid email address');
    if (!formData.country) newErrors.push('Please select a country');
    if (!allPasswordRulesMet) newErrors.push('Password does not meet requirements');
    if (!passwordsMatch) newErrors.push('Passwords do not match');

    setErrors(newErrors);

    if (newErrors.length === 0) {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('country', formData.country);
      form.append('password', formData.password);

      await signup(form);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12 bg-white relative overflow-hidden animate-in fade-in duration-500">
      {/* Decorative background blobs matching design system */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-8 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Create an Account</h1>
          <p className="text-slate-500 mt-2 font-medium">Start automating your inbox today.</p>
        </div>

        {errors.length > 0 && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <h3 className="text-sm font-bold text-red-800 mb-2">Please fix the following:</h3>
            <ul className="text-sm text-red-700 space-y-1">
              {errors.map((error, index) => (
                <li key={index}>• {error}</li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
              placeholder="you@example.com"
              required
            />
            {touched.email && !isEmailValid && formData.email && (
              <p className="text-xs text-red-600">Please enter a valid email address</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700">Country</label>
            <select
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
              onBlur={() => handleBlur('country')}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
              required
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

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                onBlur={() => handleBlur('password')}
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

            {/* Password Strength Indicator */}
            {formData.password && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className={`h-2 flex-1 rounded-full ${passwordStrength.level === 'weak' ? 'bg-red-200' : passwordStrength.level === 'medium' ? 'bg-yellow-200' : 'bg-green-200'}`}>
                    <div className={`h-full rounded-full transition-all duration-300 ${passwordStrength.color}`} style={{ width: `${(Object.values(passwordRules).filter(Boolean).length / 5) * 100}%` }}></div>
                  </div>
                  <span className={`text-xs font-medium ${passwordStrength.level === 'weak' ? 'text-red-600' : passwordStrength.level === 'medium' ? 'text-yellow-600' : 'text-green-600'}`}>
                    {passwordStrength.text}
                  </span>
                </div>

                {/* Password Requirements */}
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
            <label className="text-sm font-bold text-slate-700">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                onBlur={() => handleBlur('confirmPassword')}
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
            {touched.confirmPassword && !passwordsMatch && formData.confirmPassword && (
              <p className="text-xs text-red-600">Passwords do not match</p>
            )}
          </div>

          <label className="flex items-start gap-3 pt-2 cursor-pointer">
             <input name="agree" type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" required />
             <span className="text-sm text-slate-600 leading-tight">
               I agree to the <Link href="/terms" className="text-blue-600 hover:underline font-semibold">Terms of Service</Link> and <Link href="/privacy" className="text-blue-600 hover:underline font-semibold">Privacy Policy</Link>.
             </span>
          </label>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 mt-4 ${
              isFormValid
                ? 'bg-[#2E5BFF] hover:bg-blue-700 text-white shadow-blue-500/20'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed'
            }`}
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center justify-center gap-3 text-sm text-slate-500 my-6">
          <span className="h-px w-14 bg-slate-200" />
          <span>or</span>
          <span className="h-px w-14 bg-slate-200" />
        </div>

        <button
          formAction={signInWithGoogle}
          className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-bold py-4 rounded-xl transition-all"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
            <path d="M1 1h22v22H1z" fill="none" />
          </svg>
          Sign up with Google
        </button>

        <div className="mt-8 text-center text-sm font-medium text-slate-500">
          Already have an account? <Link href="/login" className="text-blue-600 hover:text-blue-800 font-bold">Log in here</Link>
        </div>
      </div>
    </div>
  );
}