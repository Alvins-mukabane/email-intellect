import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import 'dotenv/config'

// This line is crucial!
dotenv.config({ path: './/wsl.localhost/Ubuntu/home/administrator/projects/ai-email-agent/.env' })

console.log("My URL is:", process.env.SUPABASE_URL);

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables!')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
