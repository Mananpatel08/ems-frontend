import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicPaths = ["/login"];
const protectedPaths = ["/", "/form"];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 🚨 Ignore internal Next.js requests (VERY IMPORTANT)
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("rsc") ||
    pathname.includes("__next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/assets")
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get("access_token")?.value;

  // PUBLIC ROUTES
  if (publicPaths.some((path) => pathname.startsWith(path))) {
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // PROTECTED ROUTES
  if (protectedPaths.some((path) => pathname.startsWith(path))) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Validate JWT + Role
    try {
      const payload = JSON.parse(
        Buffer.from(token.split(".")[1], "base64").toString()
      );
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

// FIX MATCHER (your old matcher was wrong)
export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|assets).*)",
  ],
};
