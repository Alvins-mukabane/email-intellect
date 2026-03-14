import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Disable 2FA and clear related data
    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        two_factor_enabled: false,
        two_factor_method: null,
        phone_number: null,
        two_factor_backup_codes: null,
        two_factor_verification_code: null,
        two_factor_verification_expires: null
      })
      .eq('id', user.id);

    if (updateError) {
      console.error('Profile update error:', updateError);
      return NextResponse.json({ error: 'Failed to disable 2FA' }, { status: 500 });
    }

    return NextResponse.json({ message: '2FA disabled successfully' });
  } catch (error) {
    console.error('2FA disable error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}