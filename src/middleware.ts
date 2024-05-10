import { NextRequest, NextResponse } from "next/server";
import { LinksEnum } from "./types";

const BASE_URL = process.env.BASE_URL;

export async function middleware(req: NextRequest) {
  const session = req.cookies.get("session");
  const currentPath = req.nextUrl.pathname;
  console.log("🚀 ~ middleware ~ currentPath:", currentPath);
  if (
    !session &&
    (currentPath.startsWith("/favorite") ||
      currentPath.startsWith(LinksEnum.Read))
  ) {
    console.log("session => ", currentPath, session);
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const responseAPI = await fetch(BASE_URL + "api/login", {
    headers: {
      Cookie: `session=${session?.value}`,
    },
  });
  console.log("🚀 ~ responseAPI ~ responseAPI:", responseAPI.statusText);

  if (
    (currentPath.startsWith("/register") || currentPath.startsWith("/login")) &&
    responseAPI.status === 200
  ) {
    console.log("🚀 ~ middleware ~ status === 200:", currentPath);

    return NextResponse.redirect(new URL("/", req.url));
  }

  if (
    (currentPath.startsWith("/favorite") || currentPath.startsWith("/read")) &&
    responseAPI.status !== 200
  ) {
    console.log("🚀 ~ middleware ~ status !== 200:", "/login");
    return NextResponse.redirect(new URL("/login", req.url));
  }
  console.log("🚀 ~ middleware ~ NextResponse:", "NextResponse");

  return NextResponse.next();
}

export const config = {
  matcher: ["/favorite", "/read", "/login", "/register"],
};
