export default function Help() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4 text-center">Help & Support</h1>
      <p className="text-slate-500 font-medium text-center mb-12">How can we assist you today?</p>

      <div className="space-y-4">
         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">How do I connect my Gmail?</h3>
            <p className="text-sm text-slate-500">Go to Settings &gt; Connected Accounts, and click "Connect". You will be redirected to Google's secure OAuth page to grant read-only permissions.</p>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Is my data private?</h3>
            <p className="text-sm text-slate-500">Absolutely. We use strict data isolation and encryption. Your emails are only processed to generate your private summaries.</p>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">I need to contact support.</h3>
            <p className="text-sm text-slate-500">You can reach us directly at <span className="font-bold text-blue-600">support@emailagent.ai</span>. We aim to respond within 24 hours.</p>
         </div>
      </div>
    </div>
  );
}