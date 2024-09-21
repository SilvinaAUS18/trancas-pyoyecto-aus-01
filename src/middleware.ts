import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware (request: NextRequest) {
  try {
    const token = request.cookies.get('auth_cookie')

    if (!token) {
      return NextResponse.redirect(new URL('/panel', request.url))
    }

    const res = await fetch('http://localhost:3000/panel/api/auth/check', {
      headers: {
        token: token.value
      }
    })

    const data = await res.json()

    // @ts-ignore
    if (!data.isAuthorized) {
      return NextResponse.redirect(new URL('/panel', request.url))
    }

    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/panel', request.url))
  }
}

export const config = {
  matcher: '/panel/crear-noticia'
}