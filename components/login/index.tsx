'use client';
import Spinner from 'components/state-indicators/loading/spinner';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

function Login() {
  const [loading] = useState(true);

  return usePathname() === '/login' ? null : (
    <div>
      <button>{loading && <Spinner color="emerald" />}</button>
    </div>
  );
}

export default Login;
