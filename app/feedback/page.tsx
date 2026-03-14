'use client';

import { Star, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export default function Feedback() {
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