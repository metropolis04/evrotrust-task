import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest } from 'next/server'

const locales = ['en','bg'];

const mwUtils = {
    getLocale(req:NextRequest) {
        let header = req.headers.get('accept-language');
        let headers = { 'accept-language': header?.toString() }
        let languages = new Negotiator({ headers }).languages()
        let defaultLocale = 'bg'
        const matchLocaleHeader = match(languages, locales, defaultLocale);
        const { pathname } = req.nextUrl;
        const pathnameHasLocale = locales.some(
            (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
        )
        if (
            pathname.startsWith('/_next') ||
            pathname.includes('.') ||
            pathname.startsWith('/api')
        ) {
            return {
                redirect: false
            }
        }
        if (pathnameHasLocale) {
            return {
                redirect: false
            }
        }
        return {
            redirect: true,
            url: `/${matchLocaleHeader}${pathname}`
        }
    }
}

Object.freeze(mwUtils);
export default mwUtils;
