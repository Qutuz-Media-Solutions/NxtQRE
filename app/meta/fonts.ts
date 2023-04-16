// https://beta.nextjs.org/docs/optimizing/fonts
import { Grandstander, Kufam } from 'next/font/google';

export const grandstander = Grandstander({
  display: 'swap',
  variable: '--font-grandstander',
  subsets: ['latin'],
});

export const arabic = Kufam({
  display: 'swap',
  variable: '--font-arabic',
  subsets: ['arabic'],
});
