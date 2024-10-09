import React from 'react';
import NextLink from 'next/link';
import { SignInButton } from '#components/ui/signInButton';
import { PlannerIcon } from '#components/ui/PlannerIcon';

export const NavBar = ({ user, getSignInUrl, signOut }: any) => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <NextLink
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <PlannerIcon className="h-8 w-8" />
        <span className="sr-only">Planner App</span>
      </NextLink>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <NextLink
          href="/about"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </NextLink>
        <NextLink
          href="/pricing"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Pricing
        </NextLink>
        {user && (
          <>
            <NextLink
              href="/events"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Events
            </NextLink>
            <NextLink
              href="/print"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Print
            </NextLink>
          </>
        )}
        <SignInButton
          user={user}
          getSignInUrl={getSignInUrl}
          signOut={signOut}
        />
      </nav>
    </header>
  );
};
