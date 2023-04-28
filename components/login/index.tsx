'use client';
import { usePathname } from 'next/navigation';

function Login() {
  return usePathname() === '/login' ? null : (
    <div>
      <button>Login</button>
    </div>
  );
}

export default Login;
