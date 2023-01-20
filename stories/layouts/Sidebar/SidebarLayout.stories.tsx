import type { Meta, StoryObj } from '@storybook/react';

import SidebarLayout from '@/layouts/sidebar/SidebarLayout';

const meta: Meta<typeof SidebarLayout> = {
  title: 'Layouts/SidebarLayout',
  component: SidebarLayout,
};

export default meta;

type Story = StoryObj<typeof SidebarLayout>;
export const SidebarDefault: Story = {};
