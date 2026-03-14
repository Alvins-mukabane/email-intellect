import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Contact Us</h1>
        <p className="text-slate-500 font-medium">For business inquiries, partnerships, or investor relations.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
         <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
               </div>
               <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Email</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
               </div>
            </div>
            <div>
               <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Inquiry Type</label>
               <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Partnership Request</option>
                  <option>Investor Inquiry</option>
                  <option>Media Contact</option>
                  <option>General Support</option>
               </select>
            </div>
            <div>
               <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Message</label>
               <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
            </div>
            <button type="button" className="w-full bg-[#2E5BFF] hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2">
               Send Message <ArrowRight className="w-4 h-4" />
            </button>
         </form>
      </div>
    </div>
  );
}