import { analyzeEmailsAction } from './actions';
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const runtime = 'nodejs';

export default async function DashboardPage() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  // Fetch processed emails from Cloud DB
  const { data: emails } = await supabase
    .from('emails')
    .select('*')
    .order('created_at', { ascending: false });

  const stats = {
    emails: emails?.length ?? 0,
    tasks: emails?.reduce((acc, e) => acc + (e.action_items ? JSON.parse(e.action_items).length : 0), 0) ?? 0,
    opportunities: emails?.filter((e) => e.is_opportunity).length ?? 0,
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-[#0a0a0a] min-h-screen text-white">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">AI Insights Hub</h1>
        <form action={analyzeEmailsAction}>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-bold transition-all">
            Analyze My Inbox
          </button>
        </form>
      </header>

      {/* Stats Panel  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Summarized" value={stats.emails} icon="📧" />
        <StatCard title="Tasks Detected" value={stats.tasks} icon="✅" />
        <StatCard title="Opportunities" value={stats.opportunities} icon="💰" />
      </div>

      {/* Recent Emails & Tasks Preview  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-4">Latest Summaries</h2>
          {/* Map your emails here [cite: 43] */}
          {emails?.slice(0, 3).map((email) => (
            <div key={email.id} className="mb-4">
              <p className="font-semibold text-lg">{email.subject}</p>
              <p className="text-sm text-gray-300 line-clamp-2">{email.summary}</p>
            </div>
          ))}
        </section>
        <section className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-4">Urgent Tasks</h2>
          {/* Map your tasks here [cite: 49] */}
          {emails
            ?.flatMap((email) => (email.action_items ? JSON.parse(email.action_items) : []))
            .slice(0, 6)
            .map((task: string, i: number) => (
              <div key={i} className="text-sm text-gray-300 mb-2">
                • {task}
              </div>
            ))}
        </section>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string; value: number; icon: string }) {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-4xl font-black">{value}</div>
      <div className="text-gray-400 text-sm uppercase tracking-widest">{title}</div>
    </div>
  );
}
