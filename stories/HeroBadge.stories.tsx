import type { Meta, StoryObj } from '@storybook/react';
import { HeroBadge } from '../src/components/HeroBadge';

const meta: Meta<typeof HeroBadge> = {
  title: 'Components/HeroBadge',
  component: HeroBadge,
};

export default meta;
type Story = StoryObj<typeof HeroBadge>;

export const Default: Story = { args: { children: 'UNIT CONVERTER' } };
export const Tool: Story = { args: { children: 'CSS TOOL' } };
