import { createClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/dashboard'

  if (code) {
    const supabase = createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      // Use origin to ensure it redirects to the correct Vercel URL
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // If something fails, send them to an error page
  return NextResponse.redirect(`${origin}/login?error=auth_failed`)
}
