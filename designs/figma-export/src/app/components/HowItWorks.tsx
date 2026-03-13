import { Mail, BrainCircuit, ClipboardList } from 'lucide-react';

const steps = [
  {
    icon: <Mail className="w-14 h-14 text-blue-600" />,
    title: "1. Connect Your Email",
    desc: "Securely sync your inbox."
  },
  {
    icon: <BrainCircuit className="w-14 h-14 text-blue-800" />,
    title: "2. AI Analyzes Your Inbox",
    desc: "AI reads and processes your emails."
  },
  {
    icon: <ClipboardList className="w-14 h-14 text-orange-600" />,
    title: "3. Get Insights & Tasks",
    desc: "View summaries, tasks, and alerts."
  }
];

export function HowItWorks() {
  return (
    <div className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Abstract subtle background decorations */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-24 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6 flex items-center justify-center gap-6 tracking-tight">
             <span className="w-16 lg:w-32 h-px bg-slate-200"></span>
             How It Works
             <span className="w-16 lg:w-32 h-px bg-slate-200"></span>
          </h2>
          <p className="text-slate-500 text-lg lg:text-xl font-medium max-w-2xl mx-auto">
            See how our AI simplifies your email management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((s, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-12 text-center shadow-lg hover:shadow-xl transition-shadow border border-slate-100 flex flex-col items-center group">
              <div className="mb-10 w-36 h-36 bg-blue-50/80 rounded-full flex items-center justify-center relative shadow-inner group-hover:scale-105 transition-transform duration-300">
                 {/* Decorative background blobs behind the icon */}
                 <div className="absolute w-24 h-24 bg-blue-100 rounded-full blur-xl -z-10 group-hover:bg-blue-200 transition-colors"></div>
                 {s.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-2xl mb-4 tracking-tight">{s.title}</h3>
              <p className="text-slate-500 text-lg font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
