import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { analyzeInbox } from './actions';

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies });
  
  // Fetch processed emails from Cloud DB
  const { data: emails } = await supabase
    .from('emails')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Executive Overview</h1>
            <p className="text-gray-400">AI-processed intelligence from your inbox.</p>
          </div>
          <form action={analyzeInbox}>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20">
              Analyze My Inbox
            </button>
          </form>
        </div>

        {/* Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emails?.map((email) => (
            <div key={email.id} className="bg-[#161616] border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold px-2 py-1 rounded ${
                  email.priority === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {email.priority}
                </span>
                <span className="text-gray-500 text-xs">{new Date(email.created_at).toLocaleDateString()}</span>
              </div>
              
              <h3 className="font-bold truncate mb-2">{email.subject}</h3>
              <p className="text-sm text-gray-400 line-clamp-2 mb-4">{email.summary}</p>
              
              {email.action_items && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Tasks Identified</p>
                  {JSON.parse(email.action_items).map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
