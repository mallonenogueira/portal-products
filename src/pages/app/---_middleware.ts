import withAuth from "next-auth/middleware";
import { authOptions } from "../api/auth/[...nextauth]";

export default withAuth({
  pages: authOptions.pages,
});

export const config = { matcher: ["/app"] };
