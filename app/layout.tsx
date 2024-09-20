// import '@radix-ui/themes/styles.css';

// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import NextLink from 'next/link';
// import { Theme, Card, Container, Flex, Button, Box } from '@radix-ui/themes';
// import { SignInButton } from '../../components/ui/signInButton';
// import { Impersonation } from '@workos-inc/authkit-nextjs';
// import '../globals.css';

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter',
// });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Impersonation />
//         <Theme>
//           <Container style={{ backgroundColor: 'var(--gray-1)' }}>
//             <Flex direction="column" gap="5" p="5" height="100vh">
//               <Box asChild flexGrow="1">
//                 <Card size="4">
//                   <Flex direction="column" height="100%">
//                     <Flex asChild justify="between">
//                       {/* <header>
//                         <Flex gap="4">
//                           <Button asChild variant="soft">
//                             <NextLink href="/">Home</NextLink>
//                           </Button>

//                           <Button asChild variant="soft">
//                             <NextLink href="/account">Account</NextLink> */}
//                           </Button>

//                           <Button asChild variant="soft">
//                             <NextLink href="/events">Planner</NextLink>
//                           </Button>
//                         </Flex>

//                         <SignInButton />
//                       </header>
//                     </Flex>
//                     <Flex flexGrow="1" align="center" justify="center">
//                       <main>{children}</main>
//                     </Flex>
//                   </Flex>
//                 </Card>
//               </Box>
//             </Flex>
//           </Container>
//         </Theme>
//       </body>
//     </html>
//   );
// }

// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function Layout({ children }: any) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
