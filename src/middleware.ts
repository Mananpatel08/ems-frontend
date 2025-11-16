import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const publicPaths = ["/login"];
const protectedPaths = ["/", "/form",];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;
  const pathname = request.nextUrl.pathname;

  if (publicPaths.some((path) => pathname.startsWith(path))) {
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (protectedPaths.some((path) => pathname.startsWith(path))) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }


    try {
      const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
      console.log("payload", payload);
      const userRole = payload.user_role;
      if (pathname === "/" && userRole !== "SUPER_ADMIN") {
        return NextResponse.redirect(new URL("/unauthorized", request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/admin/:path*"],
};
