import React from 'react';
import { redirect } from 'next/navigation';
import { withAuth } from '#app/actions/user';
import { getEvents } from '#app/actions/events';
import Planner from '#components/ui/Planner';

async function getData() {
  const user = await withAuth();
  const events = await getEvents();
  if (!events) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return {
    props: { events, user },
    revalidate: 10,
  };
}

export default async function Page() {
  const currentDate = new Date();
  const { props } = await getData();
  const { events, user } = props;
  if (!user.user) {
    redirect('/');
  }
  //@ts-ignore - user and events are different here coming from props
  return <Planner currentDate={currentDate} user={user} events={events} />;
}
