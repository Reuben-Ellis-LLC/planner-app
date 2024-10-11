import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { addDays } from 'date-fns';
// import { within, userEvent, expect, screen, fn } from '@storybook/test';

import { Calendar } from '#components/ui/Calendar';

const meta = {
  title: 'Atom/Calendar',
  component: Calendar,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: 'single',
    selected: new Date(),
    required: true,
    onSelect: fn(),
  },
};

export const DateRangeOneMonth: Story = {
  args: {
    mode: 'range',
    selected: {
      from: new Date(),
      to: addDays(new Date(), 4),
    },
    onSelect: fn(),
    numberOfMonths: 2,
  },
};

export const DateRangeMultiMonth: Story = {
  args: {
    mode: 'range',
    selected: {
      from: new Date(),
      to: addDays(new Date(), 30),
    },
    onSelect: fn(),
    numberOfMonths: 2,
  },
};
