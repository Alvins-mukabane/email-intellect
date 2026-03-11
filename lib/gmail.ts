import { google } from 'googleapis';

export async function fetchRecentEmails(accessToken: string) {
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });

  const gmail = google.gmail({ version: 'v1', auth });

  // Get list of message IDs
  const res = await gmail.users.messages.list({
    userId: 'me',
    maxResults: 5,
  });

  const messages = res.data.messages || [];
  const emailData = [];

  for (const msg of messages) {
    const detail = await gmail.users.messages.get({
      userId: 'me',
      id: msg.id!,
    });

    const headers = detail.data.payload?.headers;
    const subject = headers?.find(h => h.name === 'Subject')?.value || 'No Subject';
    const sender = headers?.find(h => h.name === 'From')?.value || 'Unknown';
    const snippet = detail.data.snippet || '';

    emailData.push({ subject, sender, snippet, gmail_id: msg.id });
  }

  return emailData;
}
