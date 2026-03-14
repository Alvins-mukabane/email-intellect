import { Star, MessageSquare, Send, Bell, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function Feedback() {
  const [rating, setRating] = useState(0);

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 py-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
          <MessageSquare className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">How are we doing?</h1>
        <p className="text-slate-500 text-sm mt-2">Your feedback helps us train the AI and improve the experience.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-3">Rate your experience</label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button 
                  key={star} 
                  type="button" 
                  onClick={() => setRating(star)}
                  className={`p-2 rounded-xl transition-all ${rating >= star ? 'text-amber-400 scale-110' : 'text-slate-200 hover:text-amber-200 hover:scale-105'}`}
                >
                  <Star className="w-10 h-10 fill-current" />
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Name</label>
                <input type="text" placeholder="Your name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" />
             </div>
             <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Email</label>
                <input type="email" placeholder="Your email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" />
             </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Tell us more</label>
            <textarea 
              rows={4} 
              placeholder="Was the AI summary helpful? Did the system detect tasks correctly? What features should we add?" 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          <button type="button" className="w-full bg-[#2E5BFF] hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2">
            <Send className="w-4 h-4" /> Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export function Notifications() {
  const notifications = [
    { id: 1, type: "opportunity", title: "New Opportunity Detected", desc: "Investor requested a meeting for Thursday.", time: "10 min ago", unread: true },
    { id: 2, type: "task", title: "Task Deadline Approaching", desc: "Send marketing report is due in 2 hours.", time: "2 hrs ago", unread: true },
    { id: 3, type: "system", title: "Account Synced Successfully", desc: "Your Gmail account finished its daily sync.", time: "Yesterday", unread: false },
    { id: 4, type: "system", title: "Welcome to EmailAgent", desc: "Start by checking out your summarized emails.", time: "2 days ago", unread: false },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Notifications</h1>
          <p className="text-slate-500 text-sm mt-1">Alerts and updates from your AI assistant.</p>
        </div>
        <button className="text-blue-600 text-sm font-semibold hover:underline">Mark all as read</button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="divide-y divide-slate-100">
          {notifications.map((notif) => (
            <div key={notif.id} className={`p-5 flex items-start gap-4 hover:bg-slate-50 transition-colors cursor-pointer ${notif.unread ? 'bg-blue-50/30' : ''}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                  notif.type === 'opportunity' ? 'bg-amber-100 text-amber-600' :
                  notif.type === 'task' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                }`}>
                {notif.type === 'opportunity' ? <Star className="w-5 h-5" /> :
                 notif.type === 'task' ? <Bell className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className={`text-sm ${notif.unread ? 'font-bold text-slate-800' : 'font-semibold text-slate-700'}`}>{notif.title}</h4>
                  <span className="text-xs font-medium text-slate-400">{notif.time}</span>
                </div>
                <p className="text-sm text-slate-500">{notif.desc}</p>
              </div>
              {notif.unread && (
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
