import React from 'react';
import NextLink from 'next/link';
import { getUser, getSignInUrl, signOut } from '@workos-inc/authkit-nextjs';
import { Input } from '@/components/ui/input';
import { Button as ShadButton } from '@/components/ui/button';
// import { Button, Flex, Heading, Text } from '@radix-ui/themes';
// import { fetchUser } from '#app/actions/user';
import { SignInButton } from '@/components/ui/signInButton';

// async function getData() {
//   const user = await fetchUser();
//   return { user };
// }

// export default async function HomePage() {
//   const { user } = await getData();
//   return (
//     <Flex direction="column" align="center" gap="2">
//       {user ? (
//         <>
//           <Heading size="8">
//             Welcome back{user?.firstName && `, ${user?.firstName}`}
//           </Heading>
//           <Text size="5" color="gray">
//             You are now authenticated into the application
//           </Text>
//           <Flex align="center" gap="3" mt="4">
//             <Button asChild size="3" variant="soft">
//               <NextLink href="/account">View account</NextLink>
//             </Button>
//             <SignInButton large />
//           </Flex>
//         </>
//       ) : (
//         <>
//           <Heading size="8">AuthKit authentication example</Heading>
//           <Text size="5" color="gray" mb="4">
//             Sign in to view your account details
//           </Text>
//           <SignInButton large />
//         </>
//       )}
//     </Flex>
//   );
// }

export default async function HomePageLayout() {
  // const user = storybookUser;
  const { user } = await getUser();
  // const user = await getUser();
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <NextLink
          href="/"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Planner App</span>
        </NextLink>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <NextLink
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </NextLink>
          <NextLink
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </NextLink>
          <NextLink
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </NextLink>
          {user ? (
            <NextLink
              href="/events"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Events
            </NextLink>
          ) : null}
          <SignInButton
            user={user}
            getSignInUrl={getSignInUrl}
            signOut={signOut}
          />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Reclaim Your Time with Our Planner App
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Busy moms, rejoice! Our planner app is designed to save you
                    hours by streamlining your schedule and keeping you
                    organized. Embrace the digital convenience while and
                    continue to use the paper planner you love.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <NextLink
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </NextLink>
                  <NextLink
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </NextLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Busy Moms' Planner
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simplify Your Schedule, Reclaim Your Time
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our planner app is designed with busy moms in mind. Say
                  goodbye to the hassle of the traditional paper planner and
                  embrace the convenience of a digital solution that keeps your
                  schedule organized and accessible from anywhere.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Seamless Scheduling</h3>
                      <p className="text-muted-foreground">
                        Easily manage your appointments, events, and activities
                        in one centralized location.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Recurring Events</h3>
                      <p className="text-muted-foreground">
                        Set up recurring events like weekly meetings or monthly
                        bills, and never miss a beat.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Personalized Reminders
                      </h3>
                      <p className="text-muted-foreground">
                        Get timely reminders for your scheduled events, so
                        you\'re always on top of your busy life.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Print Your Schedule</h3>
                      <p className="text-muted-foreground">
                        Print your planner to take it with you wherever you go.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Streamline Your Schedule, Maximize Your Productivity
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our planner app is designed to help busy moms like you reclaim
                your time and focus on what matters most. Embrace the digital
                convenience while and continue to use the paper planner you
                love.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <NextLink
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </NextLink>
              <NextLink
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </NextLink>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the Convenience of Our Planner App
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Busy moms, say goodbye to the hassle of traditional paper
                planners and embrace the digital convenience of our app. Sign up
                now to streamline your schedule and reclaim your time.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1"
                />
                <ShadButton type="submit">Sign Up</ShadButton>
              </form>
              <p className="text-xs text-muted-foreground">
                Sign up to get started with our planner app.{' '}
                <NextLink
                  href="#"
                  className="underline underline-offset-2"
                  prefetch={false}
                >
                  Terms &amp; Conditions
                </NextLink>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Busy Mom's Planner
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Simplify Your Schedule, Reclaim Your Time
                </h2>
                <NextLink
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </NextLink>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Busy Mom's Planner
                </div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Our planner app is designed to help busy moms like you
                  streamline your schedule and focus on what matters most.
                  Embrace the digital convenience while and continue to use the
                  paper planner you love.
                </p>
                <NextLink
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </NextLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Planner App. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <NextLink
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </NextLink>
          <NextLink
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </NextLink>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
