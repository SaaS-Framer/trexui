import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  if (url.pathname === '/components') {
    url.pathname = '/components/category/all'
    return NextResponse.redirect(url)
  }
}