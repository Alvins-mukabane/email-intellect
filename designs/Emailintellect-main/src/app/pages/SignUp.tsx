import { Link } from 'react-router';
import { Mail, ArrowRight, Lock, User } from 'lucide-react';

export function SignUp() {
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

        <form className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="email"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="password"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <label className="flex items-start gap-3 pt-2 cursor-pointer">
             <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
             <span className="text-sm text-slate-600 leading-tight">
               I agree to the <Link to="/terms" className="text-blue-600 hover:underline font-semibold">Terms of Service</Link> and <Link to="/privacy" className="text-blue-600 hover:underline font-semibold">Privacy Policy</Link>.
             </span>
          </label>

          <button type="button" className="w-full py-3.5 px-4 bg-[#2E5BFF] hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 mt-4">
            Sign Up <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 text-center text-sm font-medium text-slate-500">
          Already have an account? <Link to="/signin" className="text-blue-600 hover:text-blue-800 font-bold">Log in here</Link>
        </div>
      </div>
    </div>
  );
}
