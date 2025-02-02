import { PrismaClient } from '@prisma/client';
import { createEvent } from '#app/actions/events';

const prisma = new PrismaClient();

async function seed() {
  const email = 'ethriel3695@gmail.com';

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const user = await prisma.user.create({
    data: {
      id: 'user_01J808XJ81KB2NDT9F4KWDYR9Z',
      email,
      firstName: 'Reuben',
      lastName: 'Ellis',
    },
  });

  const gmtOffset = '';

  // Monday

  // Weekly
  await createEvent(
    {
      title: 'Ruby Voice 1:45-2:15',
      userId: user.id,
      startAt: new Date('2025-01-20T13:45:00' + gmtOffset),
      endAt: new Date('2025-01-20T14:15:00' + gmtOffset),
      color: '#9c27b0',
      recurrence: 'weekly',
    },
    user
  );
  await createEvent(
    {
      title: 'Alex Voice 2:15-2:45',
      userId: user.id,
      startAt: new Date('2025-01-20T14:15:00' + gmtOffset),
      endAt: new Date('2025-01-20T14:45:00' + gmtOffset),
      color: '#2196f3',
      recurrence: 'weekly',
    },
    user
  );
  await createEvent(
    {
      title: 'Reuben Fiddle 2:00-2:30',
      userId: user.id,
      startAt: new Date('2025-01-20T14:00:00' + gmtOffset),
      endAt: new Date('2025-01-20T14:30:00' + gmtOffset),
      color: '#795548',
      recurrence: 'weekly',
    },
    user
  );
  await createEvent(
    {
      title: 'Alex Gym 4:00-6:00',
      userId: user.id,
      startAt: new Date('2025-01-20T16:00:00' + gmtOffset),
      endAt: new Date('2025-01-20T18:00:00' + gmtOffset),
      color: '#2196f3',
      recurrence: 'weekly',
    },
    user
  );

  // Daily
  await createEvent(
    {
      title: 'Enzo Gym MU 10:00-10:45',
      userId: user.id,
      startAt: new Date('2025-01-20T10:00:00' + gmtOffset),
      endAt: new Date('2025-01-20T10:45:00' + gmtOffset),
      color: '#4caf50',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Jess PT 11:30-12:20',
      userId: user.id,
      startAt: new Date('2025-01-20T11:40:00' + gmtOffset),
      endAt: new Date('2025-01-20T12:20:00' + gmtOffset),
      color: '#ff9800',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Activate 12:00-6:00',
      userId: user.id,
      startAt: new Date('2025-02-03T12:00:00' + gmtOffset),
      endAt: new Date('2025-02-03T18:00:00' + gmtOffset),
      color: '#ff9800',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'No Work',
      userId: user.id,
      startAt: new Date('2025-02-17T07:00:00' + gmtOffset),
      endAt: new Date('2025-02-17T07:30:00' + gmtOffset),
      color: '#795548',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'No Work',
      userId: user.id,
      startAt: new Date('2025-05-26T07:00:00' + gmtOffset),
      endAt: new Date('2025-05-26T07:30:00' + gmtOffset),
      color: '#795548',
      recurrence: 'daily',
    },
    user
  );

  // Tuesday

  // Weekly
  await createEvent(
    {
      title: 'Jess Voice 3:00-4:00',
      userId: user.id,
      startAt: new Date('2025-01-21T15:00:00' + gmtOffset),
      endAt: new Date('2025-01-21T16:00:00' + gmtOffset),
      color: '#ff9800',
      recurrence: 'weekly',
    },
    user
  );
  await createEvent(
    {
      title: 'Ruby Gym 4:00-7:00',
      userId: user.id,
      startAt: new Date('2025-01-21T16:00:00' + gmtOffset),
      endAt: new Date('2025-01-21T19:00:00' + gmtOffset),
      color: '#9c27b0',
      recurrence: 'weekly',
    },
    user
  );
  await createEvent(
    {
      title: 'Alex Gym 6:00-8:00',
      userId: user.id,
      startAt: new Date('2025-01-21T18:00:00' + gmtOffset),
      endAt: new Date('2025-01-21T20:00:00' + gmtOffset),
      color: '#2196f3',
      recurrence: 'weekly',
    },
    user
  );

  // Daily
  await createEvent(
    {
      title: 'Activate 1:30-5:30',
      userId: user.id,
      startAt: new Date('2025-01-28T13:30:00' + gmtOffset),
      endAt: new Date('2025-01-28T17:30:00' + gmtOffset),
      color: '#ff9800',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Activate & Perf 2:00-10:00',
      userId: user.id,
      startAt: new Date('2025-02-04T14:00:00' + gmtOffset),
      endAt: new Date('2025-02-04T22:00:00' + gmtOffset),
      color: '#ff9800',
      recurrence: 'daily',
    },
    user
  );

  // Wednesday

  // Weekly
  await createEvent(
    {
      title: 'Ifamily 10:00-4:30',
      userId: user.id,
      startAt: new Date('2025-01-22T10:00:00' + gmtOffset),
      endAt: new Date('2025-01-22T16:30:00' + gmtOffset),
      color: '#ff9800',
      recurrence: 'weekly',
    },
    user
  );

  // Daily
  await createEvent(
    {
      title: 'Activate Class',
      userId: user.id,
      startAt: new Date('2025-01-29T11:00:00' + gmtOffset),
      endAt: new Date('2025-01-29T11:30:00' + gmtOffset),
      color: '#ff9800',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Activate Class',
      userId: user.id,
      startAt: new Date('2025-02-05T11:00:00' + gmtOffset),
      endAt: new Date('2025-02-05T11:30:00' + gmtOffset),
      color: '#ff9800',
      recurrence: 'daily',
    },
    user
  );

  // Thursday

  // Weekly
  await createEvent(
    {
      title: 'Alex Piano 10:00-10:30',
      userId: user.id,
      startAt: new Date('2025-01-23T10:00:00' + gmtOffset),
      endAt: new Date('2025-01-23T10:30:00' + gmtOffset),
      color: '#2196f3',
      recurrence: 'weekly',
    },
    user
  );
  await createEvent(
    {
      title: 'Ruby Piano 10:30-11:00',
      userId: user.id,
      startAt: new Date('2025-01-23T10:30:00' + gmtOffset),
      endAt: new Date('2025-01-23T11:00:00' + gmtOffset),
      color: '#9c27b0',
      recurrence: 'weekly',
    },
    user
  );
  await createEvent(
    {
      title: 'M&A Guitar 2:30-3:00',
      userId: user.id,
      startAt: new Date('2025-01-23T14:30:00' + gmtOffset),
      endAt: new Date('2025-01-23T15:00:00' + gmtOffset),
      color: '#ff9800',
      recurrence: 'weekly',
    },
    user
  );
  await createEvent(
    {
      title: 'Alex Gym 4:00-6:00',
      userId: user.id,
      startAt: new Date('2025-01-23T16:00:00' + gmtOffset),
      endAt: new Date('2025-01-23T18:00:00' + gmtOffset),
      color: '#2196f3',
      recurrence: 'weekly',
    },
    user
  );
  await createEvent(
    {
      title: 'Ruby Gym 4:00-7:00',
      userId: user.id,
      startAt: new Date('2025-01-23T16:00:00' + gmtOffset),
      endAt: new Date('2025-01-23T19:00:00' + gmtOffset),
      color: '#9c27b0',
      recurrence: 'weekly',
    },
    user
  );
  // Daily
  await createEvent(
    {
      title: 'Activate 1:00-6:00',
      userId: user.id,
      startAt: new Date('2025-01-30T13:00:00' + gmtOffset),
      endAt: new Date('2025-01-30T18:00:00' + gmtOffset),
      color: '#ff9800',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Activate & Perf 3:00-10:00',
      userId: user.id,
      startAt: new Date('2025-02-06T15:00:00' + gmtOffset),
      endAt: new Date('2025-02-06T22:00:00' + gmtOffset),
      color: '#ff9800',
      recurrence: 'daily',
    },
    user
  );

  // Friday
  // Weekly
  await createEvent(
    {
      title: 'Enzo Gym 12:15-1:00',
      userId: user.id,
      startAt: new Date('2025-01-24T12:15:00' + gmtOffset),
      endAt: new Date('2025-01-24T13:00:00' + gmtOffset),
      color: '#4caf50',
      recurrence: 'weekly',
    },
    user
  );

  // Daily
  await createEvent(
    {
      title: 'Alex Gym Comp MT 8:00-12:00',
      userId: user.id,
      startAt: new Date('2025-01-24T08:00:00' + gmtOffset),
      endAt: new Date('2025-01-23T12:00:00' + gmtOffset),
      color: '#2196f3',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Ruby Gym Comp Poca. 10:00-5:00',
      userId: user.id,
      startAt: new Date('2025-01-31T10:00:00' + gmtOffset),
      endAt: new Date('2025-01-31T17:00:00' + gmtOffset),
      color: '#9c27b0',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Activate Perf TBD-10:00',
      userId: user.id,
      startAt: new Date('2025-02-07T12:00:00' + gmtOffset),
      endAt: new Date('2025-02-07T22:00:00' + gmtOffset),
      color: '#ff9800',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Velentine Day',
      userId: user.id,
      startAt: new Date('2025-02-14T07:00:00' + gmtOffset),
      endAt: new Date('2025-02-14T07:30:00' + gmtOffset),
      color: '#795548',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'No Work',
      userId: user.id,
      startAt: new Date('2025-02-14T07:00:00' + gmtOffset),
      endAt: new Date('2025-02-14T07:30:00' + gmtOffset),
      color: '#795548',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Kid Gym Comp Home 9:00-5:00',
      userId: user.id,
      startAt: new Date('2025-02-28T09:00:00' + gmtOffset),
      endAt: new Date('2025-02-28T17:00:00' + gmtOffset),
      color: '#9c27b0',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Ruby Gym Comp Boise 9:00-5:00',
      userId: user.id,
      startAt: new Date('2025-03-07T09:00:00' + gmtOffset),
      endAt: new Date('2025-03-07T17:00:00' + gmtOffset),
      color: '#9c27b0',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Ben B-Day',
      userId: user.id,
      startAt: new Date('2025-03-14T07:00:00' + gmtOffset),
      endAt: new Date('2025-03-14T07:30:00' + gmtOffset),
      color: '#795548',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Ruby Gym State 9:00-5:00',
      userId: user.id,
      startAt: new Date('2025-03-28T09:00:00' + gmtOffset),
      endAt: new Date('2025-03-28T17:00:00' + gmtOffset),
      color: '#9c27b0',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Jess B-Day',
      userId: user.id,
      startAt: new Date('2025-04-25T07:00:00' + gmtOffset),
      endAt: new Date('2025-04-25T07:30:00' + gmtOffset),
      color: '#795548',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'No Work',
      userId: user.id,
      startAt: new Date('2025-04-25T07:00:00' + gmtOffset),
      endAt: new Date('2025-04-25T07:30:00' + gmtOffset),
      color: '#795548',
      recurrence: 'daily',
    },
    user
  );
  // Saturday
  // Weekly

  // Daily
  await createEvent(
    {
      title: 'Activate 10:00-4:00',
      userId: user.id,
      startAt: new Date('2025-02-01T10:00:00' + gmtOffset),
      endAt: new Date('2025-02-01T16:00:00' + gmtOffset),
      color: '#ff9800',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Activate Perf TBD-10:00',
      userId: user.id,
      startAt: new Date('2025-02-08T12:00:00' + gmtOffset),
      endAt: new Date('2025-02-08T22:00:00' + gmtOffset),
      color: '#ff9800',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Anniversary',
      userId: user.id,
      startAt: new Date('2025-02-15T07:00:00' + gmtOffset),
      endAt: new Date('2025-02-15T07:30:00' + gmtOffset),
      color: '#795548',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Ethan B-Day',
      userId: user.id,
      startAt: new Date('2025-02-15T07:00:00' + gmtOffset),
      endAt: new Date('2025-02-15T07:30:00' + gmtOffset),
      color: '#795548',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Ruby Gym Comp Boise 9:00-5:00',
      userId: user.id,
      startAt: new Date('2025-03-08T09:00:00' + gmtOffset),
      endAt: new Date('2025-03-08T17:00:00' + gmtOffset),
      color: '#9c27b0',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Alex Gym State 8:00-4:00',
      userId: user.id,
      startAt: new Date('2025-03-15T08:00:00' + gmtOffset),
      endAt: new Date('2025-03-15T16:00:00' + gmtOffset),
      color: '#2196f3',
      recurrence: 'daily',
    },
    user
  );
  await createEvent(
    {
      title: 'Ruby Gym State 9:00-5:00',
      userId: user.id,
      startAt: new Date('2025-03-29T09:00:00' + gmtOffset),
      endAt: new Date('2025-03-29T17:00:00' + gmtOffset),
      color: '#9c27b0',
      recurrence: 'daily',
    },
    user
  );
  // Sunday
  // Weekly
  await createEvent(
    {
      title: 'Alex Fiddle 11:00-12:00',
      userId: user.id,
      startAt: new Date('2025-01-26T11:00:00' + gmtOffset),
      endAt: new Date('2025-01-26T12:00:00' + gmtOffset),
      color: '#2196f3',
      recurrence: 'weekly',
    },
    user
  );

  // Daily

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
