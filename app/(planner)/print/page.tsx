import React from 'react';
import { redirect } from 'next/navigation';
import Planner from '@/components/ui/PlannerPDF';
import { getUser } from '@/app/actions/user';
import { getEvents } from '@/app/actions/events';

async function getData() {
  const user = await getUser();
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

export default async function PrintLayout({ currentDate = new Date() }) {
  const { props } = await getData();
  const { events, user } = props;
  if (!user.user) {
    redirect('/');
  }
  return <Planner currentDate={currentDate} user={user} events={events} />;
}
