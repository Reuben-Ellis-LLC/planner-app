import type { Preview } from '@storybook/react';
import '@radix-ui/themes/styles.css';
import { withAuth } from '../app/actions/user.mock';
import { getEvents } from '../app/actions/events.mock';
import '../app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  // 👇 Set the return value for the getUser function
  async beforeEach() {
    withAuth.mockResolvedValue({
      user: {
        object: 'user',
        id: 'user_01J808XJ81KB2NDT9F4KWDYR9Z',
        email: 'ethriel3695@gmail.com',
        emailVerified: true,
        firstName: 'Reuben',
        profilePictureUrl:
          'https://workoscdn.com/images/v1/8STSQXZTLQob5euEiQbp1Oe1jttiuZtMiaWqYKCS2EU',
        lastName: 'Ellis',
        createdAt: '2024-06-09T13:41:04.750Z',
        updatedAt: '2024-06-09T13:41:04.750Z',
      },
      sessionId: 'session',
      accessToken: 'access',
    });
    getEvents.mockResolvedValue([
      {
        id: 'clxcmr2d700012usb6rm3d5us',
        title: 'Alex Gym',
        startAt: new Date('2024-09-28T17:00:00.000Z'),
        endAt: new Date('2024-09-28T19:00:00.000Z'),
        userId: 'user_01J808XJ81KB2NDT9F4KWDYR9Z',
        user: { email: 'ethriel3695@gmail.com' },
      },
      {
        id: 'clxcmr2d700012usb6rm3d5ps',
        title: 'Ruby Gym',
        startAt: new Date('2024-09-28T20:00:00.000Z'),
        endAt: new Date('2024-09-28T23:00:00.000Z'),
        userId: 'user_01J808XJ81KB2NDT9F4KWDYR9Z',
        user: { email: 'ethriel3695@gmail.com' },
      },
      {
        id: 'clxcmr2d700012usb6rm3d5fs',
        title: 'Ruby Gym',
        startAt: new Date('2024-09-28T20:00:00.000Z'),
        endAt: new Date('2024-09-28T23:00:00.000Z'),
        userId: 'user_01J808XJ81KB2NDT9F4KWDYR9Z',
        user: { email: 'ethriel3695@gmail.com' },
      },
    ]);
  },
};

export default preview;
