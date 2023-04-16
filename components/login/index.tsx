'use client';
import { counter, dataAtom } from '@/utils/store';
import Spinner from 'components/state-indicators/loading/spinner';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

function Login() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useAtom(dataAtom);  
  const [count, setCount] = useAtom(counter)

  // const updateName = () => setData({ ...data, name: 'Ahmad K' });
  const updateName = () => setCount(count + 1)

  return usePathname() === '/login' ? null : (
    <div>
      <button onClick={updateName}>
        {loading && <Spinner color="emerald" />}
        Click to change name
      </button>
    </div>
  );
}

export default Login;
