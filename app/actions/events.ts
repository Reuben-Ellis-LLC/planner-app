'use server';
import { fetchUser } from '../../app/actions/user';
import prisma from '../../lib/prisma';

export async function getEvents() {
  const user = await fetchUser();
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
