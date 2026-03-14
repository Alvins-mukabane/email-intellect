import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user has 2FA enabled
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('two_factor_enabled, two_factor_method, phone_number')
      .eq('id', user.id)
      .single();

    if (profileError && profileError.code !== 'PGRST116') {
      console.error('Profile fetch error:', profileError);
      return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
    }

    return NextResponse.json({
      enabled: profile?.two_factor_enabled || false,
      method: profile?.two_factor_method || null,
      phoneNumber: profile?.phone_number || null
    });
  } catch (error) {
    console.error('2FA status error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}