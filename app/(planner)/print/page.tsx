import React from 'react';
import Planner from '#components/ui/PlannerPDF';
import { withAuth } from '#app/actions/user';
import { getEvents } from '#app/actions/events';

async function getData() {
  const user = await withAuth({ ensureSignedIn: true });
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
  //@ts-ignore - events are different here coming from props
  return <Planner currentDate={currentDate} events={events} />;
}
