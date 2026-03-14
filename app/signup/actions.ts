'use server';

import { createClient } from '@/lib/supabase';
import { redirect } from 'next/navigation';

export async function signup(formData: FormData) {
  const supabase = createClient();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const name = formData.get('name') as string;
  const country = formData.get('country') as string;

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
          country: country,
          email_verified: false
        },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/verify-email`
      }
    });

    if (error) throw error;

    // Check if user needs email confirmation
    if (data.user && !data.user.email_confirmed_at) {
      // Redirect to verification pending page
      redirect('/verify-email?email=' + encodeURIComponent(email));
    } else {
      // User is auto-confirmed, go to dashboard
      redirect('/dashboard');
    }
  } catch (err: unknown) {
    const error = err as { message?: string; status?: number };

    if (
      error.message?.includes('already registered') ||
      error.status === 422
    ) {
      // Redirect to login page with a specific query param
      redirect(`/login?error=user_exists&email=${encodeURIComponent(email)}`);
    }
    redirect('/login?error=auth_failed');
  }
}
export async function signInWithGoogle() {
  const supabase = createClient();

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