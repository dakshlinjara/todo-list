import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://dmsxhwwpcxvxvgfqmeot.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtc3hod3dwY3h2eHZnZnFtZW90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3MTM5NTcsImV4cCI6MjA1NTI4OTk1N30.ZdaOjpKo1Ktmi_RyLNjFiLLs9qUaRSRWGt4VVnzCqjY";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
