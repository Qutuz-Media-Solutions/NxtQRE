import PrimaryLayout from '@/layouts/primary/PrimaryLayout';
import { arabic, grandstander } from '@/meta/fonts';
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

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: any;
}) {
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <html
      lang={lang}
      dir={dir}
      className={`${grandstander.variable} ${arabic.variable}`}
    >
      <body className="flex font-grandstander">
        {/* @ts-expect-error Server Component */}
        <Navbar lang={lang} />
        <PrimaryLayout>{children}</PrimaryLayout>
      </body>
    </html>
  );
}
