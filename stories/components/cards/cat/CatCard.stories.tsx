import CatCard from '@/components/cards/cat/CatCard';
import type { Meta, StoryObj } from '@storybook/react';
import { mockCatCardProps } from './CatCard.mock';

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
