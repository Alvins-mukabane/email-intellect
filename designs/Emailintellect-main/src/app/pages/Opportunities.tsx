import { Briefcase, TrendingUp, DollarSign, ArrowRight, UserPlus, FileText, Star } from 'lucide-react';

export function Opportunities() {
  const opportunities = [
    {
      id: 1,
      title: "Client Partnership Agreement",
      description: "Michael from Partners Inc is ready to move forward with the enterprise tier.",
      value: "$45,000",
      probability: "90%",
      type: "Sale",
      icon: DollarSign,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      id: 2,
      title: "Investor Wants to Set Up a Meeting",
      description: "Sarah Miller responded positively to the deck and requested a Q&A session this Thursday.",
      value: "Funding",
      probability: "60%",
      type: "Investment",
      icon: TrendingUp,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      id: 3,
      title: "New Talent Acquisition",
      description: "Senior Developer application looks extremely promising for the backend role.",
      value: "Hiring",
      probability: "75%",
      type: "Recruitment",
      icon: UserPlus,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      id: 4,
      title: "Media Inquiry Request",
      description: "TechCrunch reporter reached out for a comment on the recent AI release.",
      value: "PR",
      probability: "85%",
      type: "Media",
      icon: Star,
      color: "text-amber-500",
      bg: "bg-amber-100",
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Business Opportunities</h1>
          <p className="text-slate-500 text-sm mt-1">High-value signals detected from your communications.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        {opportunities.map((opp) => (
          <div key={opp.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition-all group relative overflow-hidden">
            {/* Background decoration */}
            <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full ${opp.bg} opacity-20 group-hover:scale-150 transition-transform duration-700 ease-out`}></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${opp.bg} ${opp.color} shadow-sm`}>
                  <opp.icon className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold border border-slate-200 text-slate-600 bg-white shadow-sm">
                  {opp.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{opp.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{opp.description}</p>
              
              <div className="flex items-center gap-6 mt-auto pt-4 border-t border-slate-50">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Est. Value</p>
                  <p className="font-bold text-slate-800">{opp.value}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Probability</p>
                  <p className="font-bold text-slate-800">{opp.probability}</p>
                </div>
                <div className="ml-auto">
                  <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#2E5BFF] group-hover:text-white group-hover:border-[#2E5BFF] transition-colors shadow-sm">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
