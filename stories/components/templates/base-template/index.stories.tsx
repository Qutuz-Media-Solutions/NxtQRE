import BaseTemplate from '@/components/templates/base-template';
import type { Meta, StoryObj } from '@storybook/react';
import { mockBaseTemplateProps } from './index.mocks';

const meta: Meta<typeof BaseTemplate> = {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  tags: ['templates'],
};

export default meta;
type Story = StoryObj<typeof BaseTemplate>;

export const Base: Story = {
  args: { ...mockBaseTemplateProps.base },
};
