import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function About() {
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

export function Roadmap() {
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

export function Changelog() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-12">Changelog</h1>
      
      <div className="space-y-12">
         <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-32 shrink-0">
               <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">v0.3.0</span>
               <p className="text-xs font-medium text-slate-400 mt-2 ml-1">October 12</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex-1">
               <h3 className="font-bold text-lg text-slate-800 mb-3">Task & Opportunity Detection Added</h3>
               <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
                  <li>AI now automatically isolates To-Do items from email text.</li>
                  <li>New "Opportunities" dashboard view to catch deals and meetings.</li>
                  <li>Improved sync speed by 40%.</li>
               </ul>
            </div>
         </div>
         
         <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-32 shrink-0">
               <span className="text-sm font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">v0.2.1</span>
               <p className="text-xs font-medium text-slate-400 mt-2 ml-1">September 28</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex-1">
               <h3 className="font-bold text-lg text-slate-800 mb-3">Improved AI Summaries</h3>
               <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
                  <li>Better handling of long email threads and replies.</li>
                  <li>Added priority tags (High, Medium, Low).</li>
                  <li>UI polish on the dashboard layout.</li>
               </ul>
            </div>
         </div>
      </div>
    </div>
  );
}

export function Contact() {
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

export function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 prose prose-slate">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
      <p className="text-slate-500 mb-6 font-medium">Last updated: October 2024</p>
      
      <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
         <p>This Privacy Policy describes how your personal information is collected, used, and shared when you use our Application.</p>
         <h3 className="text-lg font-bold text-slate-800 mt-8 mb-2">1. Information We Collect</h3>
         <p>When you connect your Gmail account, we request read-only access to process emails for summary and task detection. We do not sell your data or read emails manually.</p>
         
         <h3 className="text-lg font-bold text-slate-800 mt-8 mb-2">2. How We Use Your Information</h3>
         <p>The text from your emails is temporarily processed by our AI models to generate insights. Persistent storage only contains the metadata and generated summaries, strictly isolated to your account.</p>

         <h3 className="text-lg font-bold text-slate-800 mt-8 mb-2">3. Data Security</h3>
         <p>We use industry-standard encryption (AES-256) at rest and TLS in transit. Your authentication tokens are securely encrypted.</p>
      </div>
    </div>
  );
}

export function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 prose prose-slate">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Terms of Service</h1>
      <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
         <p>By accessing or using our Service, you agree to be bound by these Terms.</p>
         <h3 className="text-lg font-bold text-slate-800 mt-8 mb-2">1. Usage Rules</h3>
         <p>You agree not to misuse the platform or attempt to reverse-engineer our proprietary AI algorithms. The service is provided "as is" for productivity enhancement.</p>
         <h3 className="text-lg font-bold text-slate-800 mt-8 mb-2">2. Liability Limitations</h3>
         <p>In no event shall we be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the service, including missed emails or incorrect AI summaries.</p>
      </div>
    </div>
  );
}

export function Help() {
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
