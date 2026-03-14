import { CheckCircle2 } from 'lucide-react';

export default function Roadmap() {
  const quarters = [
    { q: "Q2 2024", title: "AI Email Summaries", desc: "Core NLP engine launch. Ability to ingest threads and generate concise bullet-point summaries.", status: "Completed" },
    { q: "Q3 2024", title: "Task & Opportunity Detection", desc: "Advanced entity recognition to isolate actionable tasks and high-value business signals.", status: "Current" },
    { q: "Q4 2024", title: "Auto-Reply Agent & Integrations", desc: "Drafting intelligent replies, scheduling via calendar, and pushing tasks to Slack & Jira.", status: "Upcoming" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-center">Product Roadmap</h1>
      <p className="text-slate-500 font-medium text-center mb-16">See where we are heading next.</p>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
        {quarters.map((item, i) => (
          <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
             <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <CheckCircle2 className="w-5 h-5" />
             </div>
             <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-1">
                   <h3 className="font-bold text-slate-800 text-lg">{item.title}</h3>
                   <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded uppercase">{item.q}</span>
                </div>
                <p className="text-slate-500 text-sm mt-2">{item.desc}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}