'use client';
import Spinner from 'components/state-indicators/loading/spinner';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

function Login() {
  const [loading, setLoading] = useState(true);

  return usePathname() === '/login' ? null : (
    <div>
      <button>
        {loading && <Spinner color="emerald" />}
        Logout
      </button>
      )<Link href="/login">Login</Link>
    </div>
  );
}

export default Login;
