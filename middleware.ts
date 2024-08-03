import { authkitMiddleware } from '@workos-inc/authkit-nextjs';

// export default authkitMiddleware({
//   middlewareAuth: {
//     enabled: true,
//     unauthenticatedPaths: ['/', '/about'],
//   },
// });

export default authkitMiddleware();

// Match against pages that require authentication
// Leave this out if you want authentication on every page in your application
// Match against the pages
export const config = {
  matcher: ['/', '/account', '/events/:path*', '/admin'],
};
