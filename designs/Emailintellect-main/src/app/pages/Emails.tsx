import { Mail, Sparkles, ChevronRight, User, Calendar, Tag, Inbox } from 'lucide-react';

export function Emails() {
  const emails = [
    { id: 1, subject: "Meeting Tomorrow", sender: "John Doe", email: "john.doe@example.com", tag: "Task", color: "text-blue-600", bg: "bg-blue-50", summary: "John wants to reschedule the meeting to tomorrow at 2 PM. Please confirm if this works for you.", time: "10:30 AM" },
    { id: 2, subject: "Investor Proposal Updates", sender: "Sarah Miller", email: "sarah@investors.com", tag: "Opportunity", color: "text-amber-600", bg: "bg-amber-50", summary: "Sarah reviewed the deck and has 3 minor changes before sending it to the board. High priority.", time: "Yesterday" },
    { id: 3, subject: "Client Partnership Agreement", sender: "Michael Partners", email: "michael@partners.inc", tag: "Opportunity", color: "text-green-600", bg: "bg-green-50", summary: "The client is ready to move forward. Attached is the final agreement for your signature.", time: "Mon, 9:00 AM" },
    { id: 4, subject: "Weekly Report Summary", sender: "Team Lead", email: "lead@company.com", tag: "Summary", color: "text-slate-600", bg: "bg-slate-100", summary: "Here is the summary of last week's performance. Overall growth is up by 15%.", time: "Oct 12" },
    { id: 5, subject: "Action Required: Domain Renewal", sender: "IT Support", email: "it@company.com", tag: "Urgent", color: "text-red-600", bg: "bg-red-50", summary: "Your primary domain expires in 3 days. Please update the billing method.", time: "Oct 10" },
  ];

  return (
    <div className="max-w-[1200px] mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Analyzed Emails</h1>
          <p className="text-slate-500 text-sm mt-1">AI has processed and categorized your recent inbox activity.</p>
        </div>
        <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm">
          <Inbox className="w-4 h-4" /> Sync Inbox
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="divide-y divide-slate-100">
          {emails.map((email) => (
            <div key={email.id} className="p-6 hover:bg-[#F4F7FE]/30 transition-colors group cursor-pointer flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm shrink-0">
                    {email.sender.charAt(0)}
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="font-semibold text-slate-800 text-sm truncate">{email.sender}</h3>
                    <p className="text-xs text-slate-400 truncate">{email.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mt-3">
                  <Calendar className="w-3.5 h-3.5" /> {email.time}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="font-bold text-slate-800 text-base leading-snug">{email.subject}</h4>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold ${email.bg} ${email.color} shrink-0`}>
                    <Sparkles className="w-3 h-3" /> {email.tag}
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{email.summary}</p>
                <div className="mt-4 flex items-center gap-4 text-sm font-medium">
                  <span className="text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors">
                    View Full Thread <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
