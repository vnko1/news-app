import { NextRequest, NextResponse } from "next/server";
import { LinksEnum } from "./types";

export async function middleware(req: NextRequest) {
  const session = req.cookies.get("session");

  if (
    (req.nextUrl.pathname.startsWith(LinksEnum.Favorite) ||
      req.nextUrl.pathname.startsWith(LinksEnum.Read)) &&
    !session
  )
    return NextResponse.rewrite(new URL(LinksEnum.Auth, req.url));

  const responseAPI = await fetch(new URL("/", req.url) + "api/login", {
    headers: {
      Cookie: `session=${session?.value}`,
    },
  });
  if (
    (req.nextUrl.pathname.startsWith(LinksEnum.Favorite) ||
      req.nextUrl.pathname.startsWith(LinksEnum.Read)) &&
    responseAPI.status !== 200
  )
    return NextResponse.rewrite(new URL(LinksEnum.Auth, req.url));

  if (
    req.nextUrl.pathname.startsWith(LinksEnum.Auth) &&
    responseAPI.status === 200
  )
    return NextResponse.rewrite(new URL(LinksEnum.Home, req.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/favorite", "/read", "/auth"],
};
