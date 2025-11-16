import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const theme = req.cookies.get('theme')?.value;
  const response = NextResponse.next();

  if (!theme) {
    // Default to dark theme
    response.cookies.set('theme', 'dark', {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });
  }

  return response;
}
