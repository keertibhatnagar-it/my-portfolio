import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const theme = req.cookies.get('theme')?.value;
  const response = NextResponse.next();

  if (!theme) {
    // Fallback using client detection via CSS preference
    const prefersDarkMode = req.headers.get('user-agent')?.includes('Chrome')
      ? req.headers.get('sec-ch-prefers-color-scheme') === 'dark'
      : false;

    // If client hint is missing, assume dark mode using prefers-color-scheme
    const isDarkMode = prefersDarkMode || (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    response.cookies.set('theme', isDarkMode ? 'dark' : 'light', {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });
  }

  return response;
}
