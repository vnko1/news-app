import { NextRequest, NextResponse } from "next/server";
import { LinksEnum } from "./types";

const BASE_URL = process.env.BASE_URL;

export async function middleware(req: NextRequest) {
  const session = req.cookies.get("session");

  if (
    !session &&
    (req.nextUrl.pathname.startsWith(LinksEnum.Favorite) ||
      req.nextUrl.pathname.startsWith(LinksEnum.Read))
  ) {
    return NextResponse.redirect(new URL(LinksEnum.Login, req.url));
  }

  const responseAPI = await fetch(BASE_URL + "api/login", {
    headers: {
      Cookie: `session=${session?.value}`,
    },
  });
  console.log("🚀 ~ responseAPI ~ responseAPI:", responseAPI.statusText);

  if (
    (req.nextUrl.pathname.startsWith(LinksEnum.Favorite) ||
      req.nextUrl.pathname.startsWith(LinksEnum.Read)) &&
    responseAPI.status !== 200
  ) {
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
