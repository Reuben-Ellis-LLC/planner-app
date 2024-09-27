import React from 'react';
import { redirect } from 'next/navigation';
import Planner from '#components/ui/PlannerPDF';
import { getUser } from '#app/actions/user';
import { getEvents } from '#app/actions/events';

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

export default async function PrintLayout() {
  const currentDate = new Date();
  const { props } = await getData();
  const events = props.events;
  const user = props.user;
  if (!user.user) {
    redirect('/');
  }
  //@ts-ignore - user and events are different here coming from props
  return <Planner currentDate={currentDate} events={events} />;
}
