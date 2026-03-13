import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { DashboardIndex } from './DashboardIndex';

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

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <DashboardIndex emails={emails ?? []} />
    </div>
  );
}
