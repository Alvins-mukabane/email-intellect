'use server';

import { createClient } from '@/lib/supabase';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const supabase = createClient();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect('/login?error=auth_failed');
  }

  // Check if email is verified
  if (data.user && !data.user.email_confirmed_at) {
    // Sign out the user since email is not verified
    await supabase.auth.signOut();
    redirect('/verify-email?email=' + encodeURIComponent(email) + '&error=not_verified');
  }

  // Check if 2FA is enabled
  const { data: profile } = await supabase
    .from('profiles')
    .select('two_factor_enabled')
    .eq('id', data.user.id)
    .single();

  if (profile?.two_factor_enabled) {
    // Redirect to 2FA verification page
    redirect('/verify-2fa');
  }

  redirect('/dashboard');
}

export async function signInWithGoogle() {
  const supabase = createClient(); // Using the shared createClient function
  
  const getURL = () => {
    let url = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000/';
    url = url.endsWith('/') ? url : `${url}/`;
    return url;
  };

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      scopes: 'https://www.googleapis.com/auth/gmail.readonly',
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
      redirectTo: `${getURL()}api/auth/callback`,
    },
  });

  if (error) throw error;
  if (data.url) redirect(data.url);
}