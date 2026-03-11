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
