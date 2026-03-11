'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { listRecentEmails, getGmailClient } from '@/lib/gmail';
import { analyzeEmailContent } from '@/lib/ai';

export async function analyzeInbox() {
  const supabase = createServerActionClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  const token = session?.provider_token; // The Google Access Token

  if (!token) throw new Error("No Google token found.");

  const messages = await listRecentEmails(token, 5);
  const gmail = await getGmailClient(token);

  for (const msg of messages) {
    const detail = await gmail.users.messages.get({ userId: 'me', id: msg.id! });
    const body = detail.data.snippet || "";
    
    // The Agent in action
    const aiResult = await analyzeEmailContent(body);

    await supabase.from('emails').upsert({
      gmail_id: msg.id,
      user_id: session.user.id,
      subject: detail.data.payload?.headers?.find(h => h.name === 'Subject')?.value,
      body_preview: body,
      summary: aiResult.summary,
      priority: aiResult.priority,
      action_items: JSON.stringify(aiResult.action_items)
    }, { onConflict: 'gmail_id' });
  }

  return { success: true };
}
