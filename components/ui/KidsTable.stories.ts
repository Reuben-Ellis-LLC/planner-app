import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect, screen, fn } from '@storybook/test';

import { KidsTable } from '#components/ui/KidsTable';

const meta = {
  title: 'Printable PDF/KidsTable',
  component: KidsTable,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof KidsTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
