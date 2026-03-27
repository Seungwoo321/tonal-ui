import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '../src/components/ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = { args: { value: 60, label: 'Progress' } };
export const Complete: Story = { args: { value: 100, label: 'Complete' } };
export const Empty: Story = { args: { value: 0, label: 'Not started' } };
