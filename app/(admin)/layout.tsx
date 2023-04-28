import Navbar from '@/layouts/navbar';
import PrimaryLayout from '@/layouts/primary/PrimaryLayout';
import { arabic, grandstander } from '@/meta/fonts';
import { Metadata } from 'next';
import 'server-only';
import 'styles/globals.sass';

export const metadata: Metadata = {
  applicationName: 'Medhal Members',
  description: 'Medhal Members application and user management application',
  title: 'Medhal Members',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Ahmad K' }, { name: 'Omar Q' }, { name: 'Bahaa N' }],
  viewport: { width: 'device-width', initialScale: 1 },
  icons: ['/favicon.svg'],
  colorScheme: 'dark',
  creator: 'Qutuz Media',
  publisher: 'Qutuz Media',
};

//  TODO: Remove 3arabi font import here, only use when needed
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${grandstander.variable} ${arabic.variable}`}>
      <body>
        <Navbar />
        <PrimaryLayout>{children}</PrimaryLayout>
      </body>
    </html>
  );
}
