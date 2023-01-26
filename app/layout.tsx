import { arabic, grandstander } from '@/meta/fonts';
import 'server-only';
import 'styles/globals.sass';

import PrimaryLayout from '@/layouts/primary/PrimaryLayout';
import SidebarLayout from '@/layouts/sidebar/SidebarLayout';
import { createServerClient } from 'lib/supabase/clients/server';
import SupabaseListener from './context/supabase/listener';
import SupabaseProvider from './context/supabase/provider';

//  TODO: Remove 3arabi font import here, only use when needed
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialise server singleton
  const supabase = createServerClient();
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  return (
    <html lang="en" className={`${grandstander.variable} ${arabic.variable}`}>
      <body>
        <SupabaseProvider session={session} error={error}>
          <SupabaseListener />
          <PrimaryLayout>
            <SidebarLayout />
            {children}
          </PrimaryLayout>
        </SupabaseProvider>
      </body>
    </html>
  );
}
