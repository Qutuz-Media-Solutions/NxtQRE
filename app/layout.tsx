import PrimaryLayout from '@/layouts/primary/PrimaryLayout';
import { arabic, grandstander } from '@/meta/fonts';
import { Metadata } from 'next';
import 'server-only';
import 'styles/globals.sass';
import Navbar from './layouts/navbar';

export const metadata: Metadata = {
  applicationName: 'Fleet Booking Luxury',
  description: 'A tranportation company providing luxury services',
  title: 'Fleet Transportation',
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
