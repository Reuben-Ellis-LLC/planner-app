'use server';
import { getUser } from './user';
import prisma from '../../lib/prisma';

export async function getEvents() {
  const user = await getUser();
  const events = await prisma.event.findMany({
    where: { userId: user?.id },
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

export async function createEvent(data, user) {
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
