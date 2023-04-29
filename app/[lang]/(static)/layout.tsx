import PrimaryLayout from '@/layouts/primary/PrimaryLayout';
import { arabic, grandstander } from '@/meta/fonts';
import { useSetAtom } from 'jotai';
import { Metadata } from 'next';
import 'server-only';
import 'styles/globals.sass';
import Navbar from '~/components/navbar/static';

export const metadata: Metadata = {
  applicationName: 'Medhal Members',
  description: 'Medhal Members application and user management application',
  title: 'Medhal Members',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Ahmad K' }, { name: 'Omar Q' }],
  viewport: { width: 'device-width', initialScale: 1 },
  icons: ['/favicon.svg'],
  colorScheme: 'dark',
  creator: 'Qutuz Media',
  publisher: 'Qutuz Media',
};

//  TODO: Remove 3arabi font import here, only use when needed
export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang={lang} className={`${grandstander.variable} ${arabic.variable}`}>
      <body className="flex font-grandstander">
        <Navbar />
        <PrimaryLayout>{children}</PrimaryLayout>
      </body>
    </html>
  );
}
