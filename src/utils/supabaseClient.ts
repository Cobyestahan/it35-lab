import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient("https://zrndupexmzskbugaiyli.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpybmR1cGV4bXpza2J1Z2FpeWxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5NDcwMDUsImV4cCI6MjA1OTUyMzAwNX0.jW5WzDop52NEoA3rORUOhexa_MlmaVJK9whNutwmuKY");