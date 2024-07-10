import { createClient } from "@supabase/supabase-js";

export const supabase =createClient(
    process.env.SUPABASE_URL || 'https://gahojqpcesyukmwbqpyj.supabase.co',
    process.env.SUPABASE_EON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhaG9qcXBjZXN5dWttd2JxcHlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyNzEzNDQsImV4cCI6MjAzNTg0NzM0NH0.hDWI_fywpMvc9lqnGUnnpNAagzoOAuidP9YHthge0DU'
)