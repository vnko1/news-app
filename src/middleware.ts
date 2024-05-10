import { NextRequest, NextResponse } from "next/server";
import { LinksEnum } from "./types";

export async function middleware(req: NextRequest) {
  const session = req.cookies.get("session");

  if (
    !session &&
    (req.nextUrl.pathname.startsWith(LinksEnum.Favorite) ||
      req.nextUrl.pathname.startsWith(LinksEnum.Read))
  ) {
    console.log("🚀 ~ middleware ~ session:", session);
    return NextResponse.redirect(new URL(LinksEnum.Login, req.url));
  }

  const responseAPI = await fetch(new URL("/", req.url) + "api/login", {
    headers: {
      Cookie: `session=${session?.value}`,
    },
  });

  console.log("🚀 ~ responseAPI ~ responseAPI:", responseAPI.status);

  if (
    (req.nextUrl.pathname.startsWith(LinksEnum.Favorite) ||
      req.nextUrl.pathname.startsWith(LinksEnum.Read)) &&
    responseAPI.status !== 200
  ) {
    console.log(
      "🚀 ~ middleware ~ req.nextUrl.pathname:",
      req.nextUrl.pathname
    );

    return NextResponse.redirect(new URL(LinksEnum.Login, req.url));
  }

  if (
    (req.nextUrl.pathname.startsWith(LinksEnum.Register) ||
      req.nextUrl.pathname.startsWith(LinksEnum.Login)) &&
    responseAPI.status === 200
  ) {
    return NextResponse.redirect(new URL(LinksEnum.Home, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/favorite", "/read", "/login", "/register"],
};
