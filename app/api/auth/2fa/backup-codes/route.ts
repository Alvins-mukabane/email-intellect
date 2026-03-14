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

    // Check if 2FA is enabled
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('two_factor_enabled')
      .eq('id', user.id)
      .single();

    if (profileError) {
      console.error('Profile fetch error:', profileError);
      return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
    }

    if (!profile.two_factor_enabled) {
      return NextResponse.json({ error: '2FA not enabled' }, { status: 400 });
    }

    // Generate new backup codes
    const backupCodes = [];
    for (let i = 0; i < 10; i++) {
      backupCodes.push(crypto.randomBytes(4).toString('hex').toUpperCase());
    }

    // Hash backup codes for storage
    const hashedBackupCodes = backupCodes.map(code =>
      crypto.createHash('sha256').update(code).digest('hex')
    );

    // Update backup codes
    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        two_factor_backup_codes: hashedBackupCodes
      })
      .eq('id', user.id);

    if (updateError) {
      console.error('Backup codes update error:', updateError);
      return NextResponse.json({ error: 'Failed to regenerate backup codes' }, { status: 500 });
    }

    return NextResponse.json({
      message: 'Backup codes regenerated successfully',
      backupCodes // Return plain backup codes to user
    });
  } catch (error) {
    console.error('Backup codes regeneration error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}