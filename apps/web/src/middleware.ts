import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/request';

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Proteccion Basica MVP para el panel de /admin
  const isAdminPath = url.pathname.startsWith('/admin') || /^\/(es|ca|en)\/admin/.test(url.pathname);
  if (isAdminPath) {
    const basicAuth = req.headers.get('authorization');
    
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      if (user === 'admin' && pwd === (process.env.ADMIN_PASSWORD || 'comparator2026')) {
        return intlMiddleware(req);
      }
    }
    
    return new NextResponse('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Admin Area"'
      }
    });
  }

  return intlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames, and exclude api, _next, etc.
  matcher: ['/', '/(es|ca|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
