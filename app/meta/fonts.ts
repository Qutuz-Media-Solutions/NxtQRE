// https://beta.nextjs.org/docs/optimizing/fonts
import { Grandstander, Marhey } from '@next/font/google';

export const grandstander = Grandstander({
  display: 'optional',
  variable: '--font-grandstander',
});

export const arabic = Marhey({
  display: 'optional',
  variable: '--font-arabic',
  subsets: ['arabic'],
});
