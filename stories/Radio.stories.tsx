import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioGroup } from '../src/components/Radio';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('md');
    return (
      <RadioGroup
        name="format"
        label="Output Format"
        options={[
          { value: 'md', label: 'Markdown' },
          { value: 'html', label: 'HTML' },
          { value: 'txt', label: 'Plain Text', description: 'no formatting' },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
};
