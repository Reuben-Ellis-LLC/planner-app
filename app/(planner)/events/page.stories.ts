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
    currentDate: new Date('2024-09-28:07:00:00Z-0600'),
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const calendarButton = await canvas.findByText('Sep 28, 2024');
    await expect(calendarButton).toBeInTheDocument();
    await userEvent.click(calendarButton);

    // const dayButton = await canvas.findByRole('gridcell', { name: /day/i });
    const dayButton = await screen.findByText(23);
    await userEvent.click(dayButton);
  },
};

export const AddEvent: Story = {
  args: {
    currentDate: new Date('2024-09-28:07:00:00Z-0600'),
  },
  play: async (context: any) => {
    if (CalendarDateChange.play) {
      await CalendarDateChange.play(context);
    }
    const { canvasElement } = context;
    const canvas = within(canvasElement);
    const eventButton = await canvas.findByText('Add Event');
    await userEvent.click(eventButton);
    await userEvent.type(await screen.findByText('Title'), 'Test Event');
    await userEvent.click(await screen.findByText('Start'));
    // await userEvent.type(await screen.findByText('Start'), '2024-09-29T07:00');
    // await userEvent.click(await screen.findByText('Add Event[role="dialog"]'));
    await userEvent.click(screen.getByText('End'));
    // await userEvent.type(screen.getByText('End'), '2024-09-29T08:00');
    // await userEvent.click(screen.getByText('Add Event[role="dialog"]'));
    // await userEvent.click(document.querySelector('body'));
    await userEvent.click(await screen.findByRole('combobox'));
    const selectOptions = await screen.findAllByRole('option');
    const weeklyOption = selectOptions.find(
      (option) => option.innerText === 'Weekly'
    );
    if (weeklyOption) {
      await userEvent.click(weeklyOption);
    } else {
      throw new Error('Weekly option not found');
    }
    // await userEvent.click(screen.getByText('Save'));

    // const dayButton = await canvas.findByRole('gridcell', { name: /day/i });
    // const dayButton = await screen.findByText(15);
    // await userEvent.click(dayButton);
  },
};
