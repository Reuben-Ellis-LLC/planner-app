'use server';
import { withAuth } from '#app/actions/user';
import prisma from '#lib/prisma';

export async function getEvents() {
  const user = await withAuth();
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
  const tasks = [];
  if (data.recurrence === 'weekly') {
    // Loop through the number of weeks and create a new task for each week
    for (let i = 0; i < 16; i++) {
      // Clone the task data for each week
      const task = { ...data };

      // Calculate the task date for this occurrence
      const newStartDate = new Date(data.startAt);
      const newEndDate = new Date(data.endAt);
      const daysToAdd = i * 7;
      newStartDate.setDate(newStartDate.getDate() + daysToAdd); // Add 7 days for each week
      newEndDate.setDate(newEndDate.getDate() + daysToAdd); // Add 7 days for each week

      // Add the calculated date to the task object
      task.startAt = newStartDate;
      task.endAt = newEndDate;

      // Push the task into the tasks array
      delete task.recurrence;
      delete task.daysOfWeek;
      delete task.daysOfMonth;
      tasks.push(task);
    }

    // Use Prisma to create many records in the database at once
    const createdTasks = await prisma.event.createMany({
      data: tasks,
    });

    return createdTasks;
  } else {
    const event = await prisma.event.create({
      data: {
        title: data.title,
        userId: user.id,
        startAt: new Date(data.startAt),
        endAt: new Date(data.endAt),
        color: data.color,
      },
    });
    return event;
  }
}

export async function updateEvent(data: any) {
  const event = await prisma.event.update({
    where: { id: data.id },
    data: {
      title: data.title,
      startAt: new Date(data.startAt),
      endAt: new Date(data.endAt),
      color: data.color,
    },
  });
  return event;
}

export async function deleteEvent(id: string) {
  const event = await prisma.event.delete({ where: { id } });
  return event;
}
