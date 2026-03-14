'use server';

import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// Helper function to create the server-side client
async function getSupabase() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) { return cookieStore.get(name)?.value },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  );
}

export async function login(formData: FormData) {
  const supabase = await getSupabase();
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
  const supabase = await getSupabase(); // Using the helper we created earlier
  
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