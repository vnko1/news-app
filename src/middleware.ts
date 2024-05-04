import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const session = req.cookies.get("session");

  if (!session) return NextResponse.redirect(new URL("/", req.url));
  console.log(session?.value);
  // const responseAPI = await fetch("/api/login", {
  //   headers: {
  //     Cookie: `session=${session?.value}`,
  //   },
  // });
  // console.log(responseAPI);

  // if (responseAPI.status !== 200)
  //   return NextResponse.redirect(new URL("/", req.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/favorite", "/read"],
};
