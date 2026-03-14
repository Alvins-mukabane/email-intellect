import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase';
import { cookies } from 'next/headers';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const body = await request.json();

    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { code, useBackupCode } = body;

    if (!code) {
      return NextResponse.json({ error: 'Verification code required' }, { status: 400 });
    }

    // Get user's 2FA data
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('two_factor_enabled, two_factor_method, two_factor_backup_codes')
      .eq('id', user.id)
      .single();

    if (profileError) {
      console.error('Profile fetch error:', profileError);
      return NextResponse.json({ error: 'Failed to verify code' }, { status: 500 });
    }

    if (!profile.two_factor_enabled) {
      return NextResponse.json({ error: '2FA not enabled' }, { status: 400 });
    }

    let codeValid = false;

    if (useBackupCode) {
      // Check backup codes
      if (!profile.two_factor_backup_codes || profile.two_factor_backup_codes.length === 0) {
        return NextResponse.json({ error: 'No backup codes available' }, { status: 400 });
      }

      const hashedCode = crypto.createHash('sha256').update(code).digest('hex');
      const codeIndex = profile.two_factor_backup_codes.indexOf(hashedCode);

      if (codeIndex !== -1) {
        codeValid = true;
        // Remove used backup code
        const updatedCodes = profile.two_factor_backup_codes.filter((_, index) => index !== codeIndex);
        await supabase
          .from('profiles')
          .update({ two_factor_backup_codes: updatedCodes })
          .eq('id', user.id);
      }
    } else {
      // For demo purposes, we'll accept any 6-digit code
      // In production, you would check against a stored verification code
      // or use a proper 2FA service like Authy, Twilio Verify, etc.
      codeValid = /^\d{6}$/.test(code);
    }

    if (!codeValid) {
      return NextResponse.json({ error: 'Invalid verification code' }, { status: 400 });
    }

    // Mark 2FA as verified for this session
    // In a production app, you might set a session flag or use a more sophisticated approach
    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        two_factor_last_verified: new Date().toISOString()
      })
      .eq('id', user.id);

    if (updateError) {
      console.error('Profile update error:', updateError);
    }

    return NextResponse.json({ message: '2FA verification successful' });
  } catch (error) {
    console.error('2FA login verify error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}