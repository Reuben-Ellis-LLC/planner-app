import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { withAuth, getSignInUrl, signOut } from '#app/actions/user';
import { Input } from '#components/ui/input';
import { Button as ShadButton } from '#components/ui/button';
import { NavBar } from '#components/ui/NavBar';
import { SignInButton } from '#components/ui/signInButton';
import TopicImageSection from '#components/ui/TopicImageSelection';

async function getData() {
  const user = await withAuth();
  return { user: user.user };
}

export default async function HomePageLayout() {
  const { user } = await getData();
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <NavBar user={user} getSignInUrl={getSignInUrl} signOut={signOut} />
      <main className="flex-1">
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src="/planner-app-hero.webp"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                priority
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Reclaim Your Time with Our Planner App!
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Designed by moms, for moms! Our planner app is designed to
                    save you hours by streamlining your schedule and keeping you
                    organized. Embrace the digital convenience and continue to
                    use the paper planner you love.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  {user ? (
                    <NextLink
                      href="/events"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Events
                    </NextLink>
                  ) : (
                    <SignInButton
                      user={user}
                      getSignInUrl={getSignInUrl}
                      signOut={signOut}
                      classNames="text-sm h-5 cursor-pointer font-medium bg-primary text-primary-foreground hover:bg-primary/80 rounded-md px-8 py-5 inline-flex justify-center items-center hover:no-underline"
                    />
                  )}
                  <NextLink
                    href="/about"
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
        <TopicImageSection />
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Not Ready to Commit? Stay Connected and Get Updates!
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {`Sign up to get updates on our planner app and stay connected
                with our community. We'll send you the latest news and updates
                directly to your inbox.`}
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1"
                />
                {/* <ShadButton type="submit">Sign Up</ShadButton> */}
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
