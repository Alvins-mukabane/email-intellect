import { Link } from 'react-router';
import { Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Welcome() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white font-sans overflow-hidden animate-in fade-in duration-700">
      
      {/* Left Content Side */}
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative z-10">
         <Link to="/" className="text-2xl font-black text-slate-900 tracking-tighter mb-16 inline-block">
            Logo.
         </Link>
         
         <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
               Welcome to your new <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Assistant</span>
            </h1>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
               To get started, we need to securely connect to your Gmail account. Our AI will analyze your inbox, extract tasks, and uncover opportunities—all without sending a single email on your behalf.
            </p>

            <div className="space-y-4 mb-10">
               <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <p className="text-sm font-semibold text-slate-700">Read-only access to your emails</p>
               </div>
               <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <p className="text-sm font-semibold text-slate-700">Bank-level encryption for your data</p>
               </div>
               <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <p className="text-sm font-semibold text-slate-700">Revoke permissions at any time</p>
               </div>
            </div>

            <Link to="/dashboard" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 hover:border-blue-500 rounded-2xl text-slate-700 hover:text-blue-600 font-bold text-lg shadow-sm hover:shadow-lg transition-all group">
               <div className="w-6 h-6 bg-red-100 rounded text-red-500 flex items-center justify-center font-bold text-xs">G</div>
               Connect Gmail Account
               <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex items-center gap-2 mt-6 text-xs font-semibold text-slate-400">
               <ShieldCheck className="w-4 h-4" /> Trusted by 10,000+ professionals
            </div>
         </div>
      </div>

      {/* Right Graphic Side */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center relative overflow-hidden hidden md:flex">
         {/* Abstract background elements */}
         <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
         <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"></div>
         
         <div className="relative z-10 bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-2xl max-w-sm w-full animate-bounce" style={{ animationDuration: '6s' }}>
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/40">
               <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
               </div>
               <div>
                  <div className="text-sm font-bold text-slate-800">Inbox Syncing...</div>
                  <div className="text-xs text-slate-500 font-medium">Analyzing threads</div>
               </div>
            </div>
            <div className="space-y-3">
               <div className="h-4 bg-white rounded-full w-full opacity-70"></div>
               <div className="h-4 bg-white rounded-full w-5/6 opacity-70"></div>
               <div className="h-4 bg-white rounded-full w-4/6 opacity-70"></div>
            </div>
         </div>
      </div>
    </div>
  );
}
