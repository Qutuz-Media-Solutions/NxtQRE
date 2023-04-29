import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { i18n } from './i18n-config';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export async function middleware(request: NextRequest) {
  let response = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  if (excludeRoutes(request.nextUrl.pathname)) return response;

  // Check if there is a supported locale in pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    let url = new URL(`/${locale}/${pathname}`, request.url);
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, url));
  }

  // Use session to re-route from protected routes
  // example re-route for auth
  // if (!session && !request.nextUrl.pathname.startsWith('/about')) {
  //   return NextResponse.redirect(new URL('/about', request.url));
  // }

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
    '/',
    '/((?!api|_next/static|_next/image|favicon.ico|video).*)',
  ],
};

const excludeRoutes = (pathname: string) => {
  //   const publicRoutes = /\.(.*)$/;
  if (
    pathname.includes('.') || // Ignore files.
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') // Ignore API calls.
    // pathname.endsWith('/%3Cno%20source%3E') // Ignore "no source" calls.
    // publicRoutes.test(pathname)
  ) {
    return true;
  }
  return false;
};
