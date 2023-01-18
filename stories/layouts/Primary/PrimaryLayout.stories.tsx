import type { Meta, StoryObj } from '@storybook/react';

import PrimaryLayout from '@/layouts/primary/PrimaryLayout';

const meta: Meta<typeof PrimaryLayout> = {
  title: 'Layouts/PrimaryLayout',
  component: PrimaryLayout,
};

export default meta;

type Story = StoryObj<typeof PrimaryLayout>;
export const PrimaryDefault: Story = {
  args: {
    children: null,
  },
};
