import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">Simple, transparent pricing</h1>
        <p className="text-xl text-slate-500 font-medium">No hidden fees. Choose the plan that works best for your workflow.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Starter Plan */}
        <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 flex flex-col">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Starter</h3>
          <p className="text-slate-500 font-medium mb-6">Perfect for individual professionals trying to clear their inbox.</p>
          <div className="mb-8">
            <span className="text-5xl font-extrabold text-slate-900">$12</span>
            <span className="text-slate-500 font-medium">/month</span>
          </div>
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3 text-slate-700 font-medium"><Check className="w-5 h-5 text-blue-500" /> Up to 500 emails summarized</li>
            <li className="flex items-center gap-3 text-slate-700 font-medium"><Check className="w-5 h-5 text-blue-500" /> Basic task extraction</li>
            <li className="flex items-center gap-3 text-slate-700 font-medium"><Check className="w-5 h-5 text-blue-500" /> 1 connected account</li>
          </ul>
          <button className="w-full py-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold transition-colors">Get Started</button>
        </div>

        {/* Pro Plan */}
        <div className="bg-blue-600 p-10 rounded-3xl shadow-xl border border-blue-700 flex flex-col relative transform md:-translate-y-4">
          <div className="absolute top-0 right-8 -translate-y-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Most Popular</div>
          <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
          <p className="text-blue-200 font-medium mb-6">For power users who need advanced automation and insights.</p>
          <div className="mb-8">
            <span className="text-5xl font-extrabold text-white">$29</span>
            <span className="text-blue-200 font-medium">/month</span>
          </div>
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3 text-white font-medium"><Check className="w-5 h-5 text-blue-300" /> Unlimited email summaries</li>
            <li className="flex items-center gap-3 text-white font-medium"><Check className="w-5 h-5 text-blue-300" /> Advanced opportunity detection</li>
            <li className="flex items-center gap-3 text-white font-medium"><Check className="w-5 h-5 text-blue-300" /> 3 connected accounts</li>
            <li className="flex items-center gap-3 text-white font-medium"><Check className="w-5 h-5 text-blue-300" /> Priority support</li>
          </ul>
          <button className="w-full py-4 rounded-xl bg-white hover:bg-slate-50 text-blue-700 font-bold shadow-lg transition-colors">Start Free Trial</button>
        </div>
      </div>
    </div>
  );
}
