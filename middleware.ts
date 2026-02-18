import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    // Lógica adicional si es necesario
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname.startsWith('/admin') && token?.role !== 'ADMIN') {
          return false;
        }
        return !!token;
      },
    },
  }
);

export const config = { matcher: ['/admin/:path*', '/dashboard/:path*'] };
