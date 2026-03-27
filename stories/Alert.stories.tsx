import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../src/components/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'danger'] },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = { args: { variant: 'info', title: 'Info', children: 'This is an informational alert.' } };
export const Success: Story = { args: { variant: 'success', title: 'Success', children: 'Operation completed.' } };
export const Warning: Story = { args: { variant: 'warning', title: 'Warning', children: 'Please check your input.' } };
export const Danger: Story = { args: { variant: 'danger', title: 'Error', children: 'Something went wrong.' } };
export const Dismissible: Story = { args: { variant: 'info', children: 'Click X to dismiss.', dismissible: true } };
