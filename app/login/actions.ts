'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { supabase } from '../../lib/supabase';
import { redirect } from 'next/navigation';

export async function signup(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error('Sign up error:', error.message);
    return;
  }

  // After signing up, Supabase usually requires email confirmation
  // unless you disable it in the dashboard.
  redirect('/dashboard');
}

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('Login error:', error.message);
    return;
  }

  redirect('/dashboard');
}
export async function signInWithGoogle() {
  const supabase = createServerActionClient({ cookies });
  
  // Use a variable for the site URL to make it easier to switch between local and prod
  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this in Vercel later
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel
      'http://localhost:3000/';
    // Make sure to include `https://` when not localhost.
    url = url.includes('http') ? url : `https://${url}`;
    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
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
      redirectTo: `${getURL()}api/auth/callback`, // This is the fix
    },
  });

  if (error) throw error;
  if (data.url) return redirect(data.url);
}