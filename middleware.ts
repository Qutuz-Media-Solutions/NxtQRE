import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (excludeRoutes(request.nextUrl.pathname)) return response;

  // Use session to re-route from protected routes
  // example re-route for auth
  //   if (!session && !request.nextUrl.pathname.startsWith('/about')) {
  //     return NextResponse.redirect(new URL('/about', request.url));
  //   }

  console.log(request.nextUrl.pathname);

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
  ],
};

const excludeRoutes = (pathname: string) => {
  //   const publicRoutes = /\.(.*)$/;
  if (
    pathname.includes('.') || // Ignore files.
    pathname.startsWith('/api') // Ignore API calls.
    // pathname.endsWith('/%3Cno%20source%3E') // Ignore "no source" calls.
    // publicRoutes.test(pathname)
  ) {
    return true;
  }
  return false;
};
