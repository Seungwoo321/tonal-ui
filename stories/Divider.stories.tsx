import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../src/components/Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <p style={{ color: 'var(--color-on-surface)', marginBottom: '1rem' }}>Content above</p>
      <Divider />
      <p style={{ color: 'var(--color-on-surface)', marginTop: '1rem' }}>Content below</p>
    </div>
  ),
};
