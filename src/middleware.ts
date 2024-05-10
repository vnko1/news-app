import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.BASE_URL;

export async function middleware(req: NextRequest) {
  const session = req.cookies.get("session");
  const currentPath = req.nextUrl.pathname;

  if (!session) return NextResponse.redirect(new URL("/", req.url));

  const responseAPI = await fetch(BASE_URL + "api/login", {
    headers: {
      Cookie: `session=${session?.value}`,
    },
  });

  if (currentPath.startsWith("/register") && responseAPI.status === 200)
    return NextResponse.redirect(new URL("/", req.url));

  if (currentPath.startsWith("/login") && responseAPI.status === 200)
    return NextResponse.redirect(new URL("/", req.url));

  if (currentPath.startsWith("/favorite") && responseAPI.status !== 200)
    return NextResponse.redirect(new URL("/login", req.url));

  if (currentPath.startsWith("/read") && responseAPI.status !== 200)
    return NextResponse.redirect(new URL("/login", req.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/favorite", "/read"],
};
