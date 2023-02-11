'use client';
import { useSupabase } from '@/context/supabase/provider';
import Spinner from 'components/state-indicators/loading/spinner';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

function Login() {
  const { supabase, session, error } = useSupabase();
  const [loading, setLoading] = useState(true);

  const logout = async () => {
    let res = await supabase.auth.signOut();
    console.log(res);
  };

  return usePathname() === '/login' ? null : (
    <div>
      {session && (
        <button onClick={logout}>
          {loading && <Spinner color="emerald" />}
          Logout
        </button>
      )}
      <Link href="/login">Login</Link>
    </div>
  );
}

export default Login;
