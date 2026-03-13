import { FileText, CheckSquare, Briefcase } from 'lucide-react';

const features = [
  {
    icon: <FileText className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600" />,
    title: "AI Summaries",
    desc: "Get concise summaries."
  },
  {
    icon: <CheckSquare className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600" />,
    title: "Task Detection",
    desc: "Extract tasks instantly."
  },
  {
    icon: <Briefcase className="w-5 h-5 sm:w-7 sm:h-7 text-orange-600" />,
    title: "Key Alerts",
    desc: "Identify opportunities."
  }
];

export function Features() {
  return (
    <div className="pb-12 sm:pb-24 pt-6 sm:pt-12 bg-slate-50 relative -mt-16 sm:-mt-40 z-30">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-24">
        {/* Changed grid-cols-1 md:grid-cols-3 to grid-cols-3 to preserve desktop layout on mobile */}
        <div className="grid grid-cols-3 gap-2 sm:gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-5 mb-2 sm:mb-5">
                <div className="w-8 h-8 sm:w-14 sm:h-14 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 shadow-inner border border-blue-100/50">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-[3vw] sm:text-lg leading-snug text-center sm:text-left">
                  {f.title}
                </h3>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed sm:pl-[76px] text-[2.5vw] sm:text-base text-center sm:text-left">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
