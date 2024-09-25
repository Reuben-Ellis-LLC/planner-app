import { PrismaClient } from '@prisma/client';

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

  const gmtOffset = '-06:00';

  await prisma.event.create({
    data: {
      title: 'Enzo Gym 10:00-10:45',
      userId: user.id,
      startAt: new Date('2024-09-23T10:00:00' + gmtOffset),
      endAt: new Date('2024-09-23T10:45:00' + gmtOffset),
    },
  });
  await prisma.event.create({
    data: {
      title: 'Ruby Voice 1:30-2:00',
      userId: user.id,
      startAt: new Date('2024-09-23T13:30:00' + gmtOffset),
      endAt: new Date('2024-09-23T14:00:00' + gmtOffset),
    },
  });
  await prisma.event.create({
    data: {
      title: 'Alex Voice 2:00-2:30',
      userId: user.id,
      startAt: new Date('2024-09-23T14:00:00' + gmtOffset),
      endAt: new Date('2024-09-23T14:30:00' + gmtOffset),
    },
  });
  await prisma.event.create({
    data: {
      title: 'Sophia Voice 2:30-3:00',
      userId: user.id,
      startAt: new Date('2024-09-23T14:30:00' + gmtOffset),
      endAt: new Date('2024-09-23T15:00:00' + gmtOffset),
    },
  });
  await prisma.event.create({
    data: {
      title: 'Reuben Fiddle 2:00-2:30',
      userId: user.id,
      startAt: new Date('2024-09-23T14:00:00' + gmtOffset),
      endAt: new Date('2024-09-23T14:30:00' + gmtOffset),
    },
  });
  await prisma.event.create({
    data: {
      title: 'Alex Gym 4:00-6:00',
      userId: user.id,
      startAt: new Date('2024-09-23T16:00:00' + gmtOffset),
      endAt: new Date('2024-09-23T18:00:00' + gmtOffset),
    },
  });

  await prisma.event.create({
    data: {
      title: 'Ruby/Sophia Gym 4:00-7:00',
      userId: user.id,
      startAt: new Date('2024-09-24T16:00:00' + gmtOffset),
      endAt: new Date('2024-09-24T19:00:00' + gmtOffset),
    },
  });
  await prisma.event.create({
    data: {
      title: 'Alex Gym 6:00-8:00',
      userId: user.id,
      startAt: new Date('2024-09-24T18:00:00' + gmtOffset),
      endAt: new Date('2024-09-24T20:00:00' + gmtOffset),
    },
  });

  await prisma.event.create({
    data: {
      title: 'Ifamily 10:00-4:30',
      userId: user.id,
      startAt: new Date('2024-09-25T10:00:00' + gmtOffset),
      endAt: new Date('2024-09-25T16:30:00' + gmtOffset),
    },
  });

  await prisma.event.create({
    data: {
      title: 'Jess Voice 4:00-5:00',
      userId: user.id,
      startAt: new Date('2024-09-26T16:00:00' + gmtOffset),
      endAt: new Date('2024-09-26T17:00:00' + gmtOffset),
    },
  });
  await prisma.event.create({
    data: {
      title: 'Alex Gym 4:00-6:00',
      userId: user.id,
      startAt: new Date('2024-09-26T16:00:00' + gmtOffset),
      endAt: new Date('2024-09-26T18:00:00' + gmtOffset),
    },
  });
  await prisma.event.create({
    data: {
      title: 'Ruby Gym 4:00-7:00',
      userId: user.id,
      startAt: new Date('2024-09-26T16:00:00' + gmtOffset),
      endAt: new Date('2024-09-26T19:00:00' + gmtOffset),
    },
  });

  //   const posts = [
  //     {
  //       slug: 'my-first-post',
  //       title: 'My First Post',
  //       markdown: `
  // # This is my first post

  // Isn't it great?
  //     `.trim(),
  //     },
  //     {
  //       slug: '90s-mixtape',
  //       title: 'A Mixtape I Made Just For You',
  //       markdown: `
  // # 90s Mixtape

  // - I wish (Skee-Lo)
  // - This Is How We Do It (Montell Jordan)
  // - Everlong (Foo Fighters)
  // - Ms. Jackson (Outkast)
  // - Interstate Love Song (Stone Temple Pilots)
  // - Killing Me Softly With His Song (Fugees, Ms. Lauryn Hill)
  // - Just a Friend (Biz Markie)
  // - The Man Who Sold The World (Nirvana)
  // - Semi-Charmed Life (Third Eye Blind)
  // - ...Baby One More Time (Britney Spears)
  // - Better Man (Pearl Jam)
  // - It's All Coming Back to Me Now (Céline Dion)
  // - This Kiss (Faith Hill)
  // - Fly Away (Lenny Kravits)
  // - Scar Tissue (Red Hot Chili Peppers)
  // - Santa Monica (Everclear)
  // - C'mon N' Ride it (Quad City DJ's)
  //     `.trim(),
  //     },
  //   ];

  //   for (const post of posts) {
  //     await prisma.post.upsert({
  //       where: { slug: post.slug },
  //       update: post,
  //       create: post,
  //     });
  //   }

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
