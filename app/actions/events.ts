'use server';
import { getUser } from './user';
import prisma from '../../lib/prisma';

export type Event = {
  id?: string;
  title: string;
  startAt: Date;
  endAt: Date;
  userId: string;
  user?: { email: string };
  recurrence?: string;
  daysOfWeek?: [];
  daysOfMonth?: [];
  color?: string;
};

export async function getEvents() {
  const user = await getUser();
  const events = await prisma.event.findMany({
    where: { userId: user.user?.id },
    include: {
      user: {
        select: { email: true },
      },
    },
  });
  if (!events) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return events;
}

export async function createEvent(data: any, user: any) {
  const event = await prisma.event.create({
    data: {
      title: data.title,
      userId: user.id,
      startAt: data.start,
      endAt: data.end,
      // user: user,
    },
  });
  return event;
}
