import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect, screen } from '@storybook/test';

import PrintLayout from './page';

const meta = {
  title: 'Route/Print',
  component: PrintLayout,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof PrintLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
  args: {
    currentDate: new Date('2024-09-27:07:00:00Z-0600'),
    events: [
      {
        id: 'clxcmr2d700012usb6rm3d5us',
        title: 'Alex Gym',
        startAt: new Date('2024-09-27T17:00:00.000Z'),
        endAt: new Date('2024-09-27T19:00:00.000Z'),
        userId: 'user_01HZYKPB4JWFPAADBPGHVRK5TY',
        user: { email: 'ethriel3695@gmail.com' },
      },
      {
        id: 'clxcmr2d700012usb6rm3d5ps',
        title: 'Ruby Gym',
        startAt: new Date('2024-09-27T20:00:00.000Z'),
        endAt: new Date('2024-09-27T23:00:00.000Z'),
        userId: 'user_01HZYKPB4JWFPAADBPGHVRK5TY',
        user: { email: 'ethriel3695@gmail.com' },
        color: 'rgba(206,208,219,1)',
      },
      {
        id: 'clxcmr2d700012usb6rm3d5fs',
        title: 'Ruby Gym',
        startAt: new Date('2024-09-27T20:00:00.000Z'),
        endAt: new Date('2024-09-27T23:00:00.000Z'),
        userId: 'user_01HZYKPB4JWFPAADBPGHVRK5TY',
        user: { email: 'ethriel3695@gmail.com' },
        color: 'rgba(206,208,219,1)',
      },
    ],
  },
  // play: async ({ canvasElement }: any) => {
  //   const canvas = within(canvasElement);
  //   const calendarButton = await canvas.findByText('Jun 8, 2024');
  //   await expect(calendarButton).toBeInTheDocument();
  //   await userEvent.click(calendarButton);

  //   // const dayButton = await canvas.findByRole('gridcell', { name: /day/i });
  //   const dayButton = await screen.findByText(15);
  //   await userEvent.click(dayButton);
  // },
};
