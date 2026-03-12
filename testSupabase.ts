import { supabase } from './lib/supabase';

async function testConnection() {
  console.log("Checking Supabase connection...");
  
  try {
    // This query is a "dummy" query that doesn't even need a table to exist
    // It just asks the database for the current time.
    const { data, error } = await supabase.rpc('version').select('*');

    // If 'version' RPC doesn't work, try a simple select on any table you KNOW you have
    // Example: const { data, error } = await supabase.from('your_table_name').select('*').limit(1);

    if (error) {
      console.error("Supabase returned an error:", error.message);
      console.error("Details:", error.details);
    } else {
      console.log("✅ Success! Connection verified.");
      console.log("Result:", data);
    }
  } catch (err) {
    console.error("An unexpected error occurred:");
    console.error(err);
  } finally {
    process.exit(); // This forces the script to close so it doesn't hang
  }
}

testConnection();