import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect, screen } from '@storybook/test';

import Page from './page';

const meta = {
  title: 'Route/Events',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const CalendarDateChange: Story = {
  args: {
    currentDate: new Date('2024-06-08:07:00:00Z-0600'),
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

export const AddEvent: Story = {
  args: {
    currentDate: new Date('2024-06-08:07:00:00Z-0600'),
  },
  // play: async (context: any) => {
  //   await CalendarDateChange.play(context);
  //   const { canvasElement } = context;
  //   const canvas = within(canvasElement);
  //   const eventButton = await canvas.findByText('Add Event');
  //   await userEvent.click(eventButton);
  //   await userEvent.type(await screen.findByText('Title'), 'Test Event');
  //   await userEvent.click(await screen.findByText('Start'));
  //   await userEvent.type(await screen.findByText('Start'), '2024-06-15T07:00');
  //   // await userEvent.click(await screen.findByText('Add Event[role="dialog"]'));
  //   await userEvent.click(screen.getByText('End'));
  //   await userEvent.type(screen.getByText('End'), '2024-06-15T08:00');
  //   // await userEvent.click(screen.getByText('Add Event[role="dialog"]'));
  //   // await userEvent.click(document.querySelector('body'));
  //   await userEvent.click(await screen.findByRole('combobox'));
  //   await userEvent.click(await screen.findByText('Weekly'));
  //   // await userEvent.click(screen.getByText('Save'));

  //   // const dayButton = await canvas.findByRole('gridcell', { name: /day/i });
  //   // const dayButton = await screen.findByText(15);
  //   // await userEvent.click(dayButton);
  // },
};
