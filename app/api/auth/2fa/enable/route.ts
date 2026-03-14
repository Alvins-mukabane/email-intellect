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

    const { method, phoneNumber } = body;

    if (!method || !['sms', 'email'].includes(method)) {
      return NextResponse.json({ error: 'Invalid method' }, { status: 400 });
    }

    if (method === 'sms' && !phoneNumber) {
      return NextResponse.json({ error: 'Phone number required for SMS' }, { status: 400 });
    }

    // Generate verification code
    const verificationCode = crypto.randomInt(100000, 999999).toString();

    // Store verification code temporarily (in production, use Redis or similar)
    const verificationToken = crypto.randomBytes(32).toString('hex');

    // Update user profile with 2FA setup data
    const { error: updateError } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        two_factor_method: method,
        phone_number: method === 'sms' ? phoneNumber : null,
        two_factor_verification_code: verificationCode,
        two_factor_verification_expires: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
        two_factor_enabled: false
      });

    if (updateError) {
      console.error('Profile update error:', updateError);
      return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
    }

    // Send verification code
    if (method === 'sms') {
      // In production, integrate with Twilio or similar SMS service
      console.log(`SMS verification code for ${phoneNumber}: ${verificationCode}`);
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

    // Generate backup codes
    const backupCodes = [];
    for (let i = 0; i < 10; i++) {
      backupCodes.push(crypto.randomBytes(4).toString('hex').toUpperCase());
    }

    // Hash backup codes for storage
    const hashedBackupCodes = backupCodes.map(code =>
      crypto.createHash('sha256').update(code).digest('hex')
    );

    // Store hashed backup codes
    const { error: backupError } = await supabase
      .from('profiles')
      .update({
        two_factor_backup_codes: hashedBackupCodes
      })
      .eq('id', user.id);

    if (backupError) {
      console.error('Backup codes storage error:', backupError);
    }

    return NextResponse.json({
      message: 'Verification code sent',
      backupCodes // Return plain backup codes to user
    });
  } catch (error) {
    console.error('2FA enable error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}