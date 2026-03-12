import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { analyzeInbox } from './actions';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) { return cookieStore.get(name)?.value },
      },
    }
  );

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
            <h1 className="text-3xl font-bold tracking-tight">Executive Overview</h1>
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
            <div
              key={email.id}
              className="bg-[#161616] border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <span
                  className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded ${
                    email.priority === 'High'
                      ? 'bg-red-500/20 text-red-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}
                >
                  {email.priority || 'Low'}
                </span>
                <span className="text-gray-600 text-xs">
                  {new Date(email.created_at).toLocaleDateString()}
                </span>
              </div>
              
              <h3 className="font-bold truncate mb-2 group-hover:text-blue-400 transition-colors">
                {email.subject}
              </h3>
              <p className="text-sm text-gray-400 line-clamp-2 mb-4 leading-relaxed">
                {email.summary}
              </p>
              
              {email.action_items && (
                <div className="space-y-2 pt-4 border-t border-white/5">
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-wider">
                    Action Items
                  </p>
                  {JSON.parse(email.action_items).map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-blue-500" />
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
