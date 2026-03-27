import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../src/components/Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Language',
    options: [
      { value: 'en', label: 'English' },
      { value: 'ko', label: 'Korean' },
      { value: 'ja', label: 'Japanese' },
    ],
  },
};
