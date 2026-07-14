import { createClient } from '@supabase/supabase-js';

// Project URL and Anon Key provided by the user
const supabaseUrl = 'https://ytoyiughnycvkidjmbbe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0b3lpdWdobnljdmtpZGptYmJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4MTgzMTAsImV4cCI6MjA4MTM5NDMxMH0.RmImBm28avGEwHWpJcWU9SmQNsiJ7Esau3N7AFqNltI';

export const supabase = createClient(supabaseUrl, supabaseKey);
