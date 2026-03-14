'use server'; // <--- MUST be the first line

import { createClient } from '@/lib/supabase';
import { listRecentEmails, getGmailClient } from '@/lib/gmail';
import { analyzeEmailContent } from '@/lib/ai';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function analyzeEmailsAction() {
  console.log('analyzeEmailsAction: started');

  try {
    const supabase = createClient();

    // Get the Google Access Token from the current session
    const { data: { session } } = await supabase.auth.getSession();
    const token = session?.provider_token;

    if (!session || !token) {
      console.error('analyzeEmailsAction: missing session or token', { hasSession: !!session, hasToken: !!token });
      throw new Error('Google Token Missing. Try logging out and in again.');
    }

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

    // THE FIX: Tell Next.js to refresh the UI immediately
    revalidatePath('/dashboard');
    revalidatePath('/tasks');
    revalidatePath('/opportunities');

    return { success: true };
  } catch (err) {
    console.error('analyzeEmailsAction: error', err);
    return { success: false };
  }
}

export async function signInWithGoogle() {
  const supabase = createClient();

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
