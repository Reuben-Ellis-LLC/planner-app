import React from 'react';
import { Card } from '@radix-ui/themes';
import Image from 'next/image';
import { withAuth, getSignInUrl, signOut } from '#app/actions/user';
import { NavBar } from '#components/ui/NavBar';

async function getData() {
  const user = await withAuth();
  return { user: user.user };
}

export default async function AboutUs() {
  const { user } = await getData();
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <NavBar user={user} getSignInUrl={getSignInUrl} signOut={signOut} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">
          About MomPlanner
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Designed by Moms, for Moms
          </h2>
          <p className="text-lg mb-4">
            {`At MomPlanner, we understand the unique challenges that come with
            balancing family life, work, and personal time. That's because we're
            moms too! Our app isn't just another planner – it's a solution born
            from real-life experiences and designed to meet the specific needs
            of busy moms like you.`}
          </p>
          <Image
            src="/placeholder.svg"
            alt="Moms using MomPlanner app"
            width={400}
            height={300}
            className="rounded-lg mx-auto mb-4"
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            {`We're on a mission to empower moms with a tool that truly
            understands their daily juggle. MomPlanner is more than just a to-do
            list – it's your personal assistant, your memory keeper, and your
            sanity saver. We're here to help you organize your chaos, celebrate
            your victories (big and small), and find those precious moments of
            calm in your busy day.`}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Jess', 'Megan', 'Heather'].map((name) => (
              <Card key={name}>
                <Image
                  src="/placeholder.svg"
                  alt={name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-2"
                />
                <h3 className="text-xl font-semibold text-center">{name}</h3>
                <p className="text-center text-muted-foreground">
                  Mom & Co-founder
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What Moms Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Laura',
                quote:
                  "MomPlanner has been a game-changer for me. I'm so much more organized and less stressed now.",
              },
              {
                name: 'Michelle',
                quote:
                  'Finally, a planner that understands what moms need! I love how easy it is to use and how much time it saves me.',
              },
            ].map((testimonial) => (
              <Card key={testimonial.name}>
                <p className="italic mb-2">{'`${testimonial.quote}`'}</p>
                <p className="text-right font-semibold">- {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>
      {/* <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Join Our Community of Moms
        </h2>
        <p className="text-lg mb-6">
          Experience the difference of a planner truly designed for moms.
          Download MomPlanner today and start taking control of your busy life!
        </p>
        <Button size="lg">Download MomPlanner</Button>
      </section> */}
    </div>
  );
}
