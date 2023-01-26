import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from 'lib/supabase/types/database.types';

export const createBrowserClient = () =>
  createBrowserSupabaseClient<Database>();
