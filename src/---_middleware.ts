import withAuth from "next-auth/middleware";
import { authOptions } from "./pages/api/auth/[...nextauth]";

export default withAuth({
  pages: authOptions.pages,
});

export const config = { matcher: ["/app"] };
