import { NextResponse } from "next/server";

async function middleware(request) {
  const cookie = request.cookies.get("token");

  const url = request.nextUrl.pathname;

  if (
    url.startsWith("/dashboard") ||
    url.startsWith("/lead") ||
    url.startsWith("/accounts") ||
    url.startsWith("/leaderboard") ||
    url.startsWith("/commission")
  ) {
    //might do with or
    if (cookie) {
      const token = cookie.value;
      try {
        const response = await fetch("http://127.0.0.1:5000/login_verify", {
          method: "POST",
          body: JSON.stringify({
            token: token,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const data = await response.json();
        if (!data.message) {
          return NextResponse.redirect(new URL("/login", request.url));
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        return NextResponse.redirect(new URL("/login", request.url));
      }
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export default middleware;
