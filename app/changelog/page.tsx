export default function Changelog() {
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