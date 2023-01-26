import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { Database } from 'lib/supabase/types/database.types';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient<Database>({
    req: request,
    res: response,
  });

  // Use session to re-route from protected routes
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // example re-route for auth
  if (!session && !request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.redirect(new URL('/about', request.url));
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - .jpeg (public images in assets)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    /* eslint-disable */
    '/^/(.*)(.jpeg)$',
  ],
};
