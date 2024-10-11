import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect, screen } from '@storybook/test';

import PrintLayout from './page';
import { withAuth } from '#app/actions/user.mock';

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
  },
  async beforeEach() {
    //   // 👇 Set the return value for the getUser function
    withAuth.mockReturnValue(
      Promise.resolve({
        user: {
          object: 'user',
          id: 'user_01J808XJ81KB2NDT9F4KWDYR9Z',
          email: 'ethriel3695@gmail.com',
          emailVerified: true,
          firstName: 'Reuben',
          profilePictureUrl:
            'https://workoscdn.com/images/v1/8STSQXZTLQob5euEiQbp1Oe1jttiuZtMiaWqYKCS2EU',
          lastName: 'Ellis',
          createdAt: '2024-09-28T13:41:04.750Z',
          updatedAt: '2024-09-28T13:41:04.750Z',
        },
        sessionId: 'session',
        accessToken: 'access',
      })
    );
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
