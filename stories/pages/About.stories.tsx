import type { Meta, StoryObj } from '@storybook/react';

import About from '@/about/page';

const meta: Meta<typeof About> = {
  title: 'Pages/About',
  component: About,
};

export default meta;

type Story = StoryObj<typeof About>;

export const AboutPage: Story = {};
