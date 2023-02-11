'use client';
import { useSupabase } from '@/context/supabase/provider';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { BaseSyntheticEvent, useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUser, setIsUser] = useState(true);
  const { supabase } = useSupabase();

  const copies = {
    subtitle: isUser ? 'Please Sign In' : "Let's Get You Signed Up",
    submitButton: isUser ? 'Sign In' : 'Sign Up',
    switchUser: isUser
      ? "Don't have an account? "
      : 'Have an account, already? ',
  };

  const signIn = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    let res = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log(res);
  };

  const signUp = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          is_admin: 'true',
          full_name: 'Ahmad K',
        },
      },
    });

    console.log({ data, error });
  };

  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-slate-300 text-stone-800">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl">
          Welcome to
          <span className="relative ml-2 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-rose-400">
            <span className="relative text-white ">Fleet Admin</span>
          </span>
        </h1>
        <p className="text-xl">{copies.subtitle}</p>
      </div>
      <div className="flex w-full flex-col items-center space-y-5 p-6">
        <form
          className="flex w-full max-w-xs flex-col space-y-3"
          onSubmit={isUser ? signIn : signUp}
        >
          <input
            className="peer/email block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-rose-500 invalid:text-rose-600
              empty:border-slate-300 focus:border-sky-500 focus:outline-none
              focus:ring-1 focus:ring-sky-500 focus:invalid:border-rose-500 focus:invalid:ring-rose-500
              disabled:border-slate-200 disabled:bg-slate-50
              disabled:text-slate-500 disabled:shadow-none"
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onInput={({ target: { value } }: BaseSyntheticEvent) =>
              setEmail(value)
            }
            placeholder="hello@example.com"
          />
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <input
            className="peer/password mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-rose-500 invalid:text-rose-600
              empty:border-slate-300 focus:border-sky-500 focus:outline-none
              focus:ring-1 focus:ring-sky-500 focus:invalid:border-rose-500 focus:invalid:ring-rose-500
              disabled:border-slate-200 disabled:bg-slate-50
              disabled:text-slate-500 disabled:shadow-none"
            type="password"
            name="password"
            id="password"
            required
            minLength={3}
            value={password}
            onInput={(e: BaseSyntheticEvent) => setPassword(e.target.value)}
          />
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <button
            type="submit"
            className="h-12 w-full items-center rounded-lg bg-rose-400 font-semibold text-white peer-invalid/password:bg-rose-400/50 peer-invalid/email:bg-rose-400/50"
          >
            {copies.submitButton}
          </button>
        </form>
        <div className="grid max-w-xs grid-cols-3 items-center text-center ">
          <div className="h-[2px] rounded-l-full bg-gradient-to-r from-slate-300 to-rose-500" />
          <p>Or continue with email link</p>
          <div className="h-[2px] rounded-l-full bg-gradient-to-l from-slate-300 to-rose-500" />
        </div>
        <div className="flex h-10 items-center overflow-hidden rounded-lg">
          <input
            className="h-full rounded-l-lg bg-white p-3"
            placeholder="Send me an e-mail"
          />
          <button className="h-full bg-rose-400  p-2">
            <EnvelopeIcon className="h-full font-semibold text-white" />
          </button>
        </div>
        <p>
          {copies.switchUser}
          <span
            className="text-blue-400 underline"
            onClick={() => {
              setIsUser(!isUser);
            }}
          >
            Click Here
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
