import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect, screen, fn } from '@storybook/test';

import { MonthlyCalendar } from '#components/ui/MonthlyCalendar';

const meta = {
  title: 'Printable PDF/MonthlyCalendar',
  component: MonthlyCalendar,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    currentDate: new Date(),
    events: [
      {
        id: 'clxcmr2d700012usb6rm3d5us',
        title: 'Alex Gym',
        startAt: new Date('2024-10-10T20:00:00.000Z'),
        endAt: new Date('2024-10-10T23:00:00.000Z'),
        userId: 'user_01J808XJ81KB2NDT9F4KWDYR9Z',
        user: { email: 'ethriel3695@gmail.com' },
        color: '#2196f3',
      },
      {
        id: 'clxcmr2d700012usb6rm3d5ps',
        title: 'Ruby Gym',
        startAt: new Date('2024-10-10T20:00:00.000Z'),
        endAt: new Date('2024-10-10T23:00:00.000Z'),
        userId: 'user_01J808XJ81KB2NDT9F4KWDYR9Z',
        user: { email: 'ethriel3695@gmail.com' },
        color: '#9c27b0',
      },
      {
        id: 'clxcmr2d700012usb6rm3d5fs',
        title: 'Ruby Gym',
        startAt: new Date('2024-10-15T20:00:00.000Z'),
        endAt: new Date('2024-10-15T23:00:00.000Z'),
        userId: 'user_01J808XJ81KB2NDT9F4KWDYR9Z',
        user: { email: 'ethriel3695@gmail.com' },
        color: '#9c27b0',
      },
    ],
  },
} satisfies Meta<typeof MonthlyCalendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
