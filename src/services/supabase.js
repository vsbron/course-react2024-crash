import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tzmuxqwkqlgqxnqbljuh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6bXV4cXdrcWxncXhucWJsanVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMDM1NDcsImV4cCI6MjAyMjg3OTU0N30.jlG-_TG5_AC-iILfAY56itr-Z3nug000fN9a_UPXla4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
