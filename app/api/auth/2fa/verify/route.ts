import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const body = await request.json();

    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { code } = body;

    if (!code) {
      return NextResponse.json({ error: 'Verification code required' }, { status: 400 });
    }

    // Get user's verification data
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('two_factor_verification_code, two_factor_verification_expires')
      .eq('id', user.id)
      .single();

    if (profileError) {
      console.error('Profile fetch error:', profileError);
      return NextResponse.json({ error: 'Failed to verify code' }, { status: 500 });
    }

    // Check if code is valid and not expired
    const now = new Date();
    const expiresAt = new Date(profile.two_factor_verification_expires);

    if (now > expiresAt) {
      return NextResponse.json({ error: 'Verification code expired' }, { status: 400 });
    }

    if (profile.two_factor_verification_code !== code) {
      return NextResponse.json({ error: 'Invalid verification code' }, { status: 400 });
    }

    // Enable 2FA and clear verification data
    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        two_factor_enabled: true,
        two_factor_verification_code: null,
        two_factor_verification_expires: null
      })
      .eq('id', user.id);

    if (updateError) {
      console.error('Profile update error:', updateError);
      return NextResponse.json({ error: 'Failed to enable 2FA' }, { status: 500 });
    }

    return NextResponse.json({ message: '2FA enabled successfully' });
  } catch (error) {
    console.error('2FA verify error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}