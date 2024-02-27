import NextAuth from "next-auth";
import { authConfig } from "./app/authconfig";

export default NextAuth(authConfig).auth;

/*export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};*/
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}