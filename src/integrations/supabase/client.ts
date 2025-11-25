import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gqedgmlrodbpidxqsbxm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxZWRnbWxyb2RicGlkeHFzYnhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyNDUyNDcsImV4cCI6MjA3ODgyMTI0N30.gx8eZj7uoLnL68geuiiQUXPzYmmPN_eV5EAr5dSdffo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Import the supabase client like this:
// For React:
// import { supabase } from "@/integrations/supabase/client";
// For React Native:
// import { supabase } from "@/src/integrations/supabase/client";
