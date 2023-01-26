import type { Meta, StoryObj } from '@storybook/react';
import CatCard from 'components/cards/cat';
import { mockCatCardProps } from './index.mock';

const meta: Meta<typeof CatCard> = {
  title: 'cards/CatCard',
  component: CatCard,
  tags: ['autodocs', 'cards', 'cat'],
};

export default meta;

type Story = StoryObj<typeof CatCard>;

export const Primary: Story = {
  args: mockCatCardProps.primary,
};
