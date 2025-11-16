import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { theme } = await request.json();
  
  const response = NextResponse.json({ success: true });
  response.cookies.set("theme", theme, {
    path: "/",
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  return response;
}

