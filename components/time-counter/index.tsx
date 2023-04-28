'use client';
import { counter } from '@/utils/store';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

const TimeCounter: React.FC = () => {
  const [clock, setClock] = useAtom(counter);

  const pad = (n: number) => (n < 10 ? `0${n}` : n);
  const format = (t: Date) =>
    `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(
      t.getUTCSeconds(),
    )}`;

  const timeString = format(new Date(clock));

  useEffect(() => {
    const timer = setInterval(() => {
      setClock(Date.now());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [setClock]);

  return (
    <h1 className="text-4xl text-emerald-500">
      The time is: <span>{timeString}</span>
    </h1>
  );
};

export default TimeCounter;
