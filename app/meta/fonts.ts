// https://beta.nextjs.org/docs/optimizing/fonts
import { Grandstander, Kufam } from '@next/font/google';

export const grandstander = Grandstander({
  display: 'optional',
  variable: '--font-grandstander',
});

export const arabic = Kufam({
  display: 'optional',
  variable: '--font-arabic',
  subsets: ['arabic'],
});
