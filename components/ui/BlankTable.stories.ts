import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect, screen, fn } from '@storybook/test';

import { BlankTable } from '#components/ui/BlankTable';

const meta = {
  title: 'Printable PDF/BlankTable',
  component: BlankTable,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    sectionName: 'Quests',
  },
} satisfies Meta<typeof BlankTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
