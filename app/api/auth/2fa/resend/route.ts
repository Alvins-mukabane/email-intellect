import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase';
import { cookies } from 'next/headers';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user's 2FA settings
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('two_factor_method, phone_number')
      .eq('id', user.id)
      .single();

    if (profileError) {
      console.error('Profile fetch error:', profileError);
      return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
    }

    if (!profile.two_factor_method) {
      return NextResponse.json({ error: '2FA not enabled' }, { status: 400 });
    }

    // Generate new verification code
    const verificationCode = crypto.randomInt(100000, 999999).toString();

    // Update verification code in database
    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        two_factor_verification_code: verificationCode,
        two_factor_verification_expires: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
      })
      .eq('id', user.id);

    if (updateError) {
      console.error('Profile update error:', updateError);
      return NextResponse.json({ error: 'Failed to update verification code' }, { status: 500 });
    }

    // Send verification code
    if (profile.two_factor_method === 'sms') {
      // In production, integrate with Twilio or similar SMS service
      console.log(`SMS verification code for ${profile.phone_number}: ${verificationCode}`);
      // TODO: Send SMS via Twilio
    } else {
      // Send email verification code
      const { error: emailError } = await supabase.auth.resend({
        type: 'email',
        email: user.email!,
        options: {
          data: {
            verification_code: verificationCode
          }
        }
      });

      if (emailError) {
        console.error('Email send error:', emailError);
        return NextResponse.json({ error: 'Failed to send verification email' }, { status: 500 });
      }
    }

    return NextResponse.json({ message: 'Verification code sent' });
  } catch (error) {
    console.error('2FA resend error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}