'use client';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { BaseSyntheticEvent, useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-slate-300 text-stone-800">
      <div className="text-center">
        <h1 className="text-2xl">Welcome to Fleet Admin</h1>
        <p className="text-xl">Please sign in</p>
      </div>
      <div className="flex w-full flex-col items-center space-y-5 p-6">
        <form className="flex w-full max-w-xs flex-col space-y-5">
          <input
            className="h-12 w-full rounded-lg bg-slate-100 pl-4 autofill:bg-slate-200"
            type="email"
            name="email"
            value={email}
            onInput={({ target: { value } }: BaseSyntheticEvent) =>
              setEmail(value)
            }
            placeholder="hello@example.com"
          />
          <input
            className="h-12 w-full rounded-lg bg-slate-100 pl-4"
            type="password"
            name="password"
            value={password}
            onInput={(e: BaseSyntheticEvent) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="h-12 w-full items-center rounded-lg bg-rose-400 font-semibold text-white"
          >
            Sign In
          </button>
        </form>
        <div className="grid max-w-xs grid-cols-3 items-center text-center ">
          <div className="h-[2px] rounded-l-full bg-gradient-to-r from-slate-300 to-rose-500" />
          <p>Or continue with email link</p>
          <div className="h-[2px] rounded-l-full bg-gradient-to-l from-slate-300 to-rose-500" />
        </div>
        <div>
          <EnvelopeIcon />
        </div>
      </div>
    </section>
  );
};

export default Login;
