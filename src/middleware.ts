import { NextResponse, NextRequest } from 'next/server';
import mwUtils from './app/utils/mwUtils';

export async function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url))
    const locale = mwUtils.getLocale(request);
    if (locale.url) {
        request.nextUrl.pathname = locale.url
        return NextResponse.redirect(request.nextUrl)
    }
    
}
 
export const config = {
  matcher: [
    '/((?!_next).*)',
    
  ],
}