'use server';

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
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      scopes: 'https://www.googleapis.com/auth/gmail.readonly',
      redirectTo: `http://localhost:3000/api/auth/callback`,
    },
  });

  if (error) throw error;

  if (data.url) {
    return redirect(data.url); // Use 'return' here
  }
}