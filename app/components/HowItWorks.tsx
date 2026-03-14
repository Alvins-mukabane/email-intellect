import { Mail, BrainCircuit, ClipboardList } from 'lucide-react';

const steps = [
  {
    icon: <Mail className="w-8 h-8 sm:w-14 sm:h-14 text-blue-600" />,
    title: "1. Connect",
    desc: "Sync your inbox securely."
  },
  {
    icon: <BrainCircuit className="w-8 h-8 sm:w-14 sm:h-14 text-blue-800" />,
    title: "2. Analyze",
    desc: "AI processes emails."
  },
  {
    icon: <ClipboardList className="w-8 h-8 sm:w-14 sm:h-14 text-orange-600" />,
    title: "3. Insights",
    desc: "View summaries & tasks."
  }
];

export function HowItWorks() {
  return (
    <div className="py-12 sm:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-24 relative z-10">
        <div className="text-center mb-8 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-3 sm:mb-6 flex items-center justify-center gap-2 sm:gap-6 tracking-tight">
             <span className="w-8 sm:w-16 lg:w-32 h-px bg-slate-200"></span>
             How It Works
             <span className="w-8 sm:w-16 lg:w-32 h-px bg-slate-200"></span>
          </h2>
          <p className="text-slate-500 text-[3vw] sm:text-lg lg:text-xl font-medium max-w-2xl mx-auto">
            See how our AI simplifies your email management.
          </p>
        </div>

        {/* Changed grid-cols-1 md:grid-cols-3 to grid-cols-3 to preserve desktop layout on mobile */}
        <div className="grid grid-cols-3 gap-2 sm:gap-8 lg:gap-12">
          {steps.map((s, i) => (
            <div key={i} className="bg-white rounded-xl sm:rounded-[2rem] p-3 sm:p-12 text-center shadow-lg hover:shadow-xl transition-shadow border border-slate-100 flex flex-col items-center group">
              <div className="mb-4 sm:mb-10 w-16 h-16 sm:w-36 sm:h-36 bg-blue-50/80 rounded-full flex items-center justify-center relative shadow-inner group-hover:scale-105 transition-transform duration-300">
                 <div className="absolute w-12 h-12 sm:w-24 sm:h-24 bg-blue-100 rounded-full blur-xl -z-10 group-hover:bg-blue-200 transition-colors"></div>
                 {s.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-[3vw] sm:text-2xl mb-1 sm:mb-4 tracking-tight">{s.title}</h3>
              <p className="text-slate-500 text-[2.5vw] sm:text-lg font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
