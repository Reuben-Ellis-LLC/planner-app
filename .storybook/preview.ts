import type { Preview } from '@storybook/react';
import * as MockDate from 'mockdate';
import '@radix-ui/themes/styles.css';
import { withAuth } from '#app/actions/user.mock';
import { getEvents } from '#app/actions/events.mock';
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
    viewport: {
      viewports: {
        mobile: { name: 'mobile', styles: { width: '450px', height: '952px' } },
        smTablet: {
          name: 'small tablet',
          styles: { width: '640px', height: '800px' },
        },
        printFiveByEight: {
          name: 'print 5x8',
          styles: { width: '5in', height: '8in' },
        },
        tablet: {
          name: 'tablet',
          styles: { width: '1024px', height: '1000px' },
        },
        printEightFiveByEleven: {
          name: 'print 8.5x11',
          styles: { width: '8.5in', height: '11in' },
        },
        laptop: {
          name: 'laptop',
          styles: { width: '1440px', height: '900px' },
        },
        desktop: {
          name: 'desktop',
          styles: { width: '1920px', height: '1080px' },
        },
      },
    },
  },

  // 👇 Set the return value for the getUser function
  async beforeEach() {
    // Fixed dates for consistent screenshots
    MockDate.set(new Date());
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
      // @ts-ignore
      {
        id: 'clxcmr2d700012usb6rm3d5us',
        title: 'Alex Gym',
        startAt: new Date('2024-10-10T20:00:00.000Z'),
        endAt: new Date('2024-10-10T23:00:00.000Z'),
        userId: 'user_01J808XJ81KB2NDT9F4KWDYR9Z',
        user: { email: 'ethriel3695@gmail.com' },
        color: '#2196f3',
      },
      // @ts-ignore
      {
        id: 'clxcmr2d700012usb6rm3d5ps',
        title: 'Ruby Gym',
        startAt: new Date('2024-10-10T20:00:00.000Z'),
        endAt: new Date('2024-10-10T23:00:00.000Z'),
        userId: 'user_01J808XJ81KB2NDT9F4KWDYR9Z',
        user: { email: 'ethriel3695@gmail.com' },
        color: '#9c27b0',
      },
      // @ts-ignore
      {
        id: 'clxcmr2d700012usb6rm3d5fs',
        title: 'Ruby Gym',
        startAt: new Date('2024-10-15T20:00:00.000Z'),
        endAt: new Date('2024-10-15T23:00:00.000Z'),
        userId: 'user_01J808XJ81KB2NDT9F4KWDYR9Z',
        user: { email: 'ethriel3695@gmail.com' },
        color: '#9c27b0',
      },
    ]);
  },

  tags: ['autodocs']
};

export default preview;
