import React from 'react';
import BlankPlanner from '#components/ui/BlankPlanner';

export default async function PrintLayout() {
  const currentDate = new Date();
  //@ts-ignore - events are different here coming from props
  return <BlankPlanner currentDate={currentDate} />;
}
