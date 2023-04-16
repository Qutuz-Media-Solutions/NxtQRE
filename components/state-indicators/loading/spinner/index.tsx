import { textColors } from 'lib/types/globals.types';
import React from 'react';

export interface ISpinner {
  color?: textColors;
}

function Spinner({ color = 'emerald' }: ISpinner) {
  const colorVariants = {
    slate: 'text-slate-600 hover:text-slate-500',
    gray: 'text-gray-600 hover:text-gray-500',
    zinc: 'text-zinc-600 hover:text-zinc-500',
    neutral: 'text-neutral-600 hover:text-neutral-500',
    stone: 'text-stone-600 hover:text-stone-500',
    red: 'text-red-600 hover:text-red-500',
    orange: 'text-orange-600 hover:text-orange-500',
    amber: 'text-amber-600 hover:text-amber-500',
    yellow: 'text-yellow-600 hover:text-yellow-500',
    lime: 'text-lime-600 hover:text-lime-500',
    green: 'text-green-600 hover:text-green-500',
    emerald: 'text-emerald-600 hover:text-emerald-500',
    teal: 'text-teal-600 hover:text-teal-500',
    cyan: 'text-cyan-600 hover:text-cyan-500',
    sky: 'text-sky-600 hover:text-sky-500',
    blue: 'text-blue-600 hover:text-blue-500',
    indigo: 'text-indigo-600 hover:text-indigo-500',
    violet: 'text-violet-600 hover:text-violet-500',
    purple: 'text-purple-600 hover:text-purple-500',
    fuchsia: 'text-fuchsia-600 hover:text-fuchsia-500',
    pink: 'text-pink-600 hover:text-pink-500',
    rose: 'text-rose-600 hover:text-rose-500',
  };

  return (
    <svg
      className={`animate-spin -ml-1 mr-3 h-5 w-5 ${colorVariants[color]}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export default Spinner;
