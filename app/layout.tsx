import { arabic, grandstander } from '@/meta/fonts';
import 'server-only';
import 'styles/globals.sass';

import PrimaryLayout from '@/layouts/primary/PrimaryLayout';
import Navbar from './layouts/navbar';

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
