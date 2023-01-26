'use client';
import type { Session, SupabaseClient } from '@supabase/auth-helpers-nextjs';
import { AuthError } from '@supabase/supabase-js';
import { createBrowserClient } from 'lib/supabase/clients/browser';
import type { Database } from 'lib/supabase/types/database.types';
import { createContext, useContext, useState } from 'react';

type MaybeSession = Session | null;
type MaybeAuthError = AuthError | null;

export type SupabaseContext = {
  supabase: SupabaseClient<Database>;
  session: MaybeSession;
  error: MaybeAuthError;
};

// @ts-ignore
const Context = createContext<SupabaseContext>();

export default function SupabaseProvider({
  children,
  session,
  error,
}: {
  children: React.ReactNode;
  session: MaybeSession;
  error: MaybeAuthError;
}) {
  const [supabase] = useState(() => createBrowserClient());

  return (
    <Context.Provider value={{ supabase, session, error }}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useSupabase = () => useContext(Context);
