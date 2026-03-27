import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { label: 'Email', placeholder: 'you@example.com' } };
export const WithError: Story = { args: { label: 'Email', error: 'Invalid email address', value: 'bad@' } };
export const NoLabel: Story = { args: { placeholder: 'Search...' } };
