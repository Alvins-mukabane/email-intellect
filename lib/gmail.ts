import { google } from 'googleapis';

/**
 * Creates a Gmail client using the OAuth2 access token.
 */
export async function getGmailClient(accessToken: string) {
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });
  return google.gmail({ version: 'v1', auth });
}

/**
 * Fetches the IDs of the most recent emails.
 * Filters out social/promotions to keep the AI focused on important mail.
 */
export async function listRecentEmails(accessToken: string, maxResults = 10) {
  const gmail = await getGmailClient(accessToken);
  const response = await gmail.users.messages.list({
    userId: 'me',
    maxResults,
    q: '-category:promotions -category:social',
  });
  return response.data.messages || [];
}

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
