import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">Redefining Inbox Productivity</h1>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          We believe that your email should work for you, not the other way around. Our mission is to transform overwhelmed inboxes into structured action plans using state-of-the-art AI.
        </p>
      </div>

      <div className="bg-blue-50 rounded-3xl p-8 md:p-12 text-center md:text-left md:flex items-center gap-12 border border-blue-100 mb-16">
         <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Why we built this</h2>
            <p className="text-slate-600 leading-relaxed">
               Professionals spend over 28% of their work week managing email. Important tasks get buried, opportunities are missed, and cognitive load is exhausted on sorting rather than executing. We built this AI agent to act as a tireless Chief of Staff—reading, analyzing, and surfacing exactly what matters.
            </p>
         </div>
      </div>
    </div>
  );
}