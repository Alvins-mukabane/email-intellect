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

export async function signup(formData: FormData) {
  const supabase = await getSupabase();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    redirect('/dashboard');
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