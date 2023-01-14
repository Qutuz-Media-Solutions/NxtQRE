import BaseTemplate from '@/components/templates/BaseTemplate';
import type { Meta, StoryObj } from '@storybook/react';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

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
