import { CheckCircle2, DollarSign, Inbox, MessageSquare, ChevronRight, Check, MoreHorizontal } from 'lucide-react';
import { ImageWithFallback } from './components/ImageWithFallback';

export function DashboardIndex() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-6 pb-20 relative animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Today's Summary Card */}
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
         <div className="z-10 w-full md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Today's Summary</h2>
            <div className="space-y-5">
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform"><Inbox className="w-5 h-5" /></div>
                  <span className="font-semibold text-slate-600">3 Emails Summarized</span>
               </div>
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform"><CheckCircle2 className="w-5 h-5" /></div>
                  <span className="font-semibold text-slate-600">2 Important Tasks</span>
               </div>
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform"><DollarSign className="w-5 h-5" /></div>
                  <span className="font-semibold text-slate-600">1 Opportunity Found</span>
               </div>
            </div>
            <button className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all mt-4 pt-6 border-t border-slate-50 w-full">
              View All <ChevronRight className="w-4 h-4" />
            </button>
         </div>
         {/* Robot Illustration Area */}
         <div className="w-full md:w-1/2 h-48 md:h-auto mt-6 md:mt-0 relative flex justify-end items-center pointer-events-none">
            {/* Background blobs for illustration */}
            <div className="absolute right-10 w-48 h-48 bg-blue-50 rounded-full blur-2xl"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1768400730810-5c4398d58ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMGFpJTIwcm9ib3QlMjAzZHxlbnwxfHx8fDE3NzMzNDMxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="AI Assistant"
              className="w-full max-w-[280px] object-contain drop-shadow-2xl relative z-10 mix-blend-multiply"
            />
         </div>
      </section>

      {/* Two Column Section: Tasks & Opportunities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         
         {/* Tasks */}
         <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col h-[340px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-800">Tasks</h3>
              <button className="text-slate-300 hover:text-slate-500 p-1"><MoreHorizontal className="w-5 h-5" /></button>
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto custom-scrollbar pr-2">
               <label className="flex items-center gap-3 p-3 hover:bg-[#F4F7FE] rounded-xl cursor-pointer transition-colors border border-transparent hover:border-blue-50">
                  <div className="relative flex items-center justify-center w-5 h-5 shrink-0 bg-blue-500 rounded border border-blue-500">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-600 font-medium text-sm">Send project proposal to client</span>
               </label>
               <label className="flex items-center gap-3 p-3 hover:bg-[#F4F7FE] rounded-xl cursor-pointer transition-colors border border-transparent hover:border-blue-50">
                  <div className="relative flex items-center justify-center w-5 h-5 shrink-0 bg-green-500 rounded border border-green-500">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-600 font-medium text-sm">Schedule follow-up call on Friday</span>
               </label>
               <label className="flex items-center gap-3 p-3 hover:bg-[#F4F7FE] rounded-xl cursor-pointer transition-colors border border-transparent hover:border-blue-50">
                  <div className="relative flex items-center justify-center w-5 h-5 shrink-0 bg-blue-500 rounded border border-blue-500">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-600 font-medium text-sm">Prepare presentation deck</span>
               </label>
            </div>
            <button className="text-blue-600 font-semibold text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all mt-4 w-full bg-[#F4F7FE] hover:bg-blue-50 py-3 rounded-xl">
              View All <ChevronRight className="w-4 h-4" />
            </button>
         </div>

         {/* Opportunities */}
         <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col h-[340px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-800">Opportunities</h3>
              <button className="text-slate-300 hover:text-slate-500 p-1"><MoreHorizontal className="w-5 h-5" /></button>
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto custom-scrollbar pr-2">
               <div className="flex items-center gap-3 p-3 hover:bg-[#F4F7FE] rounded-xl transition-colors border border-transparent hover:border-blue-50 cursor-pointer">
                  <div className="w-3 h-3 rounded-sm bg-red-400 shrink-0"></div>
                  <span className="text-slate-600 font-medium text-sm flex-1 truncate">Client interested in part...</span>
                  <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-1 rounded-md shrink-0 border border-red-100 shadow-sm">High Priority</span>
               </div>
               <div className="flex items-center gap-3 p-3 hover:bg-[#F4F7FE] rounded-xl transition-colors border border-transparent hover:border-blue-50 cursor-pointer">
                  <div className="w-3 h-3 rounded-sm bg-green-400 shrink-0"></div>
                  <span className="text-slate-600 font-medium text-sm flex-1 truncate">Investor wants to set up a meeting</span>
               </div>
               <div className="flex items-center gap-3 p-3 hover:bg-[#F4F7FE] rounded-xl transition-colors border border-transparent hover:border-blue-50 cursor-pointer">
                  <div className="w-3 h-3 rounded-sm bg-blue-400 shrink-0"></div>
                  <span className="text-slate-600 font-medium text-sm flex-1 truncate">Follow up with the media inquiry</span>
               </div>
            </div>
            <button className="text-blue-600 font-semibold text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all mt-4 w-full bg-[#F4F7FE] hover:bg-blue-50 py-3 rounded-xl">
              View All <ChevronRight className="w-4 h-4" />
            </button>
         </div>
      </div>

      {/* Recent Emails Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
         <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-800">Recent Emails</h3>
            <button className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 border border-slate-200 px-3 py-1.5 rounded-lg transition-colors">
               View All <ChevronRight className="w-3 h-3" />
            </button>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-[#F4F7FE]/50 text-slate-500 text-sm font-medium">
                     <th className="p-4 pl-6 font-medium w-1/3">Subject</th>
                     <th className="p-4 font-medium w-1/3">Sender</th>
                     <th className="p-4 pr-6 font-medium w-1/3">Analyzed</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                  <tr className="hover:bg-[#F4F7FE]/50 transition-colors group cursor-pointer">
                     <td className="p-4 pl-6">
                        <div className="font-bold text-slate-800 text-sm mb-1">Meeting Tomorrow</div>
                        <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium"><Inbox className="w-3 h-3" /> Email Summarized</div>
                     </td>
                     <td className="p-4 text-slate-600 text-sm">
                        <div className="font-medium text-slate-700 mb-1">John Doe</div>
                        <div className="text-slate-400 text-xs">john.@gmail.com</div>
                     </td>
                     <td className="p-4 pr-6">
                        <div className="flex items-center justify-between">
                           <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-[#EBF0FF] text-[#2E5BFF]">
                              <Check className="w-3 h-3" /> Task
                           </span>
                           <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1" />
                        </div>
                     </td>
                  </tr>
                  <tr className="hover:bg-[#F4F7FE]/50 transition-colors group cursor-pointer">
                     <td className="p-4 pl-6">
                        <div className="font-bold text-slate-800 text-sm mb-1">Investor Proposal</div>
                        <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium"><Inbox className="w-3 h-3" /> Email Summarized</div>
                     </td>
                     <td className="p-4 text-slate-600 text-sm">
                        <div className="font-medium text-slate-700 mb-1">Sarah Miller</div>
                        <div className="text-slate-400 text-xs">sardit@gmail.com</div>
                     </td>
                     <td className="p-4 pr-6">
                        <div className="flex items-center justify-between">
                           <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-600">
                              <Check className="w-3 h-3" /> Opportunity
                           </span>
                           <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1" />
                        </div>
                     </td>
                  </tr>
                  <tr className="hover:bg-[#F4F7FE]/50 transition-colors group cursor-pointer">
                     <td className="p-4 pl-6">
                        <div className="font-bold text-slate-800 text-sm mb-1">Client Partnership Opportunity</div>
                        <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium"><Inbox className="w-3 h-3" /> Email Summarized</div>
                     </td>
                     <td className="p-4 text-slate-600 text-sm">
                        <div className="font-medium text-slate-700 mb-1">Michael @ Partners Inc</div>
                        <div className="text-slate-400 text-xs">michael@partners.inc</div>
                     </td>
                     <td className="p-4 pr-6">
                        <div className="flex items-center justify-between">
                           <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-green-50 text-green-600">
                              <Check className="w-3 h-3" /> Opportunity
                           </span>
                           <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1" />
                        </div>
                     </td>
                  </tr>
                  <tr className="hover:bg-[#F4F7FE]/50 transition-colors group cursor-pointer">
                     <td className="p-4 pl-6">
                        <div className="font-bold text-slate-800 text-sm mb-1">Weekly Report Summary</div>
                        <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium"><Inbox className="w-3 h-3" /> Email Summarized</div>
                     </td>
                     <td className="p-4 text-slate-600 text-sm">
                        <div className="font-medium text-slate-700 mb-1">Team Lead</div>
                        <div className="text-slate-400 text-xs">teamlead.com</div>
                     </td>
                     <td className="p-4 pr-6">
                        <div className="flex items-center justify-between">
                           <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-[#EBF0FF] text-[#2E5BFF]">
                              <Inbox className="w-3 h-3" /> Summary
                           </span>
                           <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1" />
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>

      {/* Floating Send Feedback Button */}
      <button className="fixed bottom-8 right-8 bg-[#2E5BFF] hover:bg-blue-700 text-white px-5 py-3.5 rounded-xl shadow-xl font-medium text-sm flex items-center gap-2 transition-all hover:-translate-y-1 hover:shadow-blue-500/20 z-50">
         <MessageSquare className="w-4 h-4" /> Send Feedback
      </button>
    </div>
  );
}
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">AI Insights Hub</h1>
          <p className="text-sm text-slate-300">Your inbox, intelligently summarized.</p>
        </div>
        <AnalyzeButton />
      </header>

      {/* Today's Summary Card */}
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div className="z-10 w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Today's Summary</h2>
          <div className="space-y-5">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <Inbox className="w-5 h-5" />
              </div>
              <span className="font-semibold text-slate-600">{stats.emails} Emails Summarized</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="font-semibold text-slate-600">{stats.tasks} Important Tasks</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                <DollarSign className="w-5 h-5" />
              </div>
              <span className="font-semibold text-slate-600">{stats.opportunities} Opportunity Found</span>
            </div>
          </div>
          <button className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all mt-4 pt-6 border-t border-slate-50 w-full">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        {/* Robot Illustration Area */}
        <div className="w-full md:w-1/2 h-48 md:h-auto mt-6 md:mt-0 relative flex justify-end items-center pointer-events-none">
          <div className="absolute right-10 w-48 h-48 bg-blue-50 rounded-full blur-2xl"></div>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1768400730810-5c4398d58ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMGFpJTIwcm9ib3QlMjAzZHxlbnwxfHx8fDE3NzMzNDMxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="AI Assistant"
            className="w-full max-w-[280px] object-contain drop-shadow-2xl relative z-10 mix-blend-multiply"
          />
        </div>
      </section>

      {/* Two Column Section: Tasks & Opportunities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tasks */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col h-[340px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800">Tasks</h3>
            <button className="text-slate-300 hover:text-slate-500 p-1">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto custom-scrollbar pr-2">
            {tasks.length === 0 ? (
              <div className="text-slate-500 text-sm">No tasks detected yet.</div>
            ) : (
              tasks.slice(0, 6).map((task, i) => (
                <label
                  key={i}
                  className="flex items-center gap-3 p-3 hover:bg-[#F4F7FE] rounded-xl cursor-pointer transition-colors border border-transparent hover:border-blue-50"
                >
                  <div className="relative flex items-center justify-center w-5 h-5 shrink-0 bg-blue-500 rounded border border-blue-500">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-600 font-medium text-sm">{task}</span>
                </label>
              ))
            )}
          </div>
          <button className="text-blue-600 font-semibold text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all mt-4 w-full bg-[#F4F7FE] hover:bg-blue-50 py-3 rounded-xl">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Opportunities */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col h-[340px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800">Opportunities</h3>
            <button className="text-slate-300 hover:text-slate-500 p-1">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto custom-scrollbar pr-2">
            {opportunities.length === 0 ? (
              <div className="text-slate-500 text-sm">No opportunities found yet.</div>
            ) : (
              opportunities.slice(0, 6).map((op, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 hover:bg-[#F4F7FE] rounded-xl transition-colors border border-transparent hover:border-blue-50 cursor-pointer"
                >
                  <div className="w-3 h-3 rounded-sm bg-green-400 shrink-0"></div>
                  <span className="text-slate-600 font-medium text-sm flex-1 truncate">
                    {op.subject}
                  </span>
                  <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md shrink-0 border border-green-100 shadow-sm">
                    Opportunity
                  </span>
                </div>
              ))
            )}
          </div>
          <button className="text-blue-600 font-semibold text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all mt-4 w-full bg-[#F4F7FE] hover:bg-blue-50 py-3 rounded-xl">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Recent Emails Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800">Recent Emails</h3>
          <button className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 border border-slate-200 px-3 py-1.5 rounded-lg transition-colors">
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F4F7FE]/50 text-slate-500 text-sm font-medium">
                <th className="p-4 pl-6 font-medium w-1/3">Subject</th>
                <th className="p-4 font-medium w-1/3">Sender</th>
                <th className="p-4 pr-6 font-medium w-1/3">Analyzed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {recentEmails.map((email) => (
                <tr key={email.id} className="hover:bg-[#F4F7FE]/50 transition-colors group cursor-pointer">
                  <td className="p-4 pl-6">
                    <div className="font-bold text-slate-800 text-sm mb-1">{email.subject}</div>
                    <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                      <Inbox className="w-3 h-3" /> Email Summarized
                    </div>
                  </td>
                  <td className="p-4 text-slate-600 text-sm">
                    <div className="font-medium text-slate-700 mb-1">Unknown Sender</div>
                    <div className="text-slate-400 text-xs">noreply@example.com</div>
                  </td>
                  <td className="p-4 pr-6">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-[#EBF0FF] text-[#2E5BFF]">
                        <Check className="w-3 h-3" /> Task
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Floating Send Feedback Button */}
      <button className="fixed bottom-8 right-8 bg-[#2E5BFF] hover:bg-blue-700 text-white px-5 py-3.5 rounded-xl shadow-xl font-medium text-sm flex items-center gap-2 transition-all hover:-translate-y-1 hover:shadow-blue-500/20 z-50">
        <MessageSquare className="w-4 h-4" /> Send Feedback
      </button>

      {/* Global Style overrides just for custom scrollbar in this view */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}
