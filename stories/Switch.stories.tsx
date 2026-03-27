import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch } from '../src/components/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch label="Enable notifications" checked={checked} onChange={setChecked} />;
  },
};

export const Disabled: Story = {
  render: () => <Switch label="Disabled" checked={false} onChange={() => {}} disabled />,
};
