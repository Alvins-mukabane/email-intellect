'use server';

import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { listRecentEmails, getGmailClient } from '@/lib/gmail';
import { analyzeEmailContent } from '@/lib/ai';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function getSupabaseServer() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options });
        },
      },
    }
  );
}

export async function analyzeInbox() {
  const supabase = await getSupabaseServer();
  
  // Get the Google Access Token from the current session
  const { data: { session } } = await supabase.auth.getSession();
  const token = session?.provider_token;

  if (!session || !token) throw new Error("Google Token Missing. Try logging out and in again.");

  // Fetch the 5 most recent emails
  const messages = await listRecentEmails(token, 5);
  const gmail = await getGmailClient(token);

  for (const msg of messages) {
    const detail = await gmail.users.messages.get({ userId: 'me', id: msg.id! });
    const bodySnippet = detail.data.snippet || "";
    const subject = detail.data.payload?.headers?.find(h => h.name === 'Subject')?.value || "No Subject";

    // Trigger the AI Agent to summarize and extract tasks
    const aiAnalysis = await analyzeEmailContent(bodySnippet);

    // Save the structured insights to your Cloud Database
    await supabase.from('emails').upsert({
      gmail_id: msg.id,
      user_id: session.user.id,
      subject: subject,
      body_preview: bodySnippet,
      summary: aiAnalysis.summary,
      priority: aiAnalysis.priority,
      action_items: JSON.stringify(aiAnalysis.action_items), // Store as string for the MVP
      is_opportunity: aiAnalysis.opportunity || false
    }, { onConflict: 'gmail_id' });
  }

  // Refresh the UI to show new data immediately
  revalidatePath('/dashboard');
  return { success: true };
}

export async function signInWithGoogle() {
  const supabase = await getSupabaseServer();
  
  // DevOps Trick: Automatically detect if we are on Vercel or Localhost
  const getURL = () => {
    let url =
      process.env.NEXT_PUBLIC_SITE_URL ?? 
      'http://localhost:3000/';
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
    return url;
  };

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      scopes: 'https://www.googleapis.com/auth/gmail.readonly',
      queryParams: { access_type: 'offline', prompt: 'consent' },
      redirectTo: `${getURL()}api/auth/callback`,
    },
  });

  if (error) throw error;
  if (data.url) return redirect(data.url);
}
