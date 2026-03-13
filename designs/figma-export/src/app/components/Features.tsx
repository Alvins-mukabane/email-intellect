import { FileText, CheckSquare, Briefcase } from 'lucide-react';

const features = [
  {
    icon: <FileText className="w-7 h-7 text-blue-600" />,
    title: "AI-Powered Summaries",
    desc: "Get concise summaries of your important emails."
  },
  {
    icon: <CheckSquare className="w-7 h-7 text-blue-600" />,
    title: "Task & Deadline Detection",
    desc: "Extract tasks and deadlines automatically."
  },
  {
    icon: <Briefcase className="w-7 h-7 text-orange-600" />,
    title: "Opportunity Alerts",
    desc: "Identify key opportunities in your inbox."
  }
];

export function Features() {
  return (
    <div className="pb-24 pt-12 bg-slate-50 relative -mt-40 z-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 shadow-inner border border-blue-100/50">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg leading-snug">{f.title}</h3>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed pl-[76px]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
