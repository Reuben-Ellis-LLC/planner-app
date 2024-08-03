import React from 'react';
import { fetchUser } from '../../actions/user';
import { getEvents } from '../../actions/events';
import Planner from '../../../components/ui/Planner';

async function getData() {
  const user = await fetchUser();
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

export default async function Page({ currentDate = new Date() }) {
  const { props } = await getData();
  const { events, user } = props;
  return <Planner currentDate={currentDate} user={user} events={events} />;
}
