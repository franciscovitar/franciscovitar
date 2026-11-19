import { NextResponse } from "next/server";

// Pass the selected language (?lang=es, default en) to the root layout
// so <html lang> matches the rendered content on every route.
export function middleware(request) {
  const lang = request.nextUrl.searchParams.get("lang") === "es" ? "es" : "en";
  const headers = new Headers(request.headers);
  headers.set("x-site-lang", lang);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
