import { arabic, grandstander } from '@/meta/fonts';
import 'styles/globals.sass';

import PrimaryLayout from '@/layouts/primary/PrimaryLayout';
import SidebarLayout from '@/layouts/sidebar/SidebarLayout';

//  TODO: Remove 3arabi font import here, only use when needed
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${grandstander.variable} ${arabic.variable}`}>
      <body>
        <PrimaryLayout>
          <SidebarLayout />
          {children}
        </PrimaryLayout>
      </body>
    </html>
  );
}
