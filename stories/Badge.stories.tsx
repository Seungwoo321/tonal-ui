import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../src/components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: { control: 'select', options: ['default', 'success', 'warning', 'danger', 'info'] },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: 'Default' } };
export const Success: Story = { args: { children: 'Published', variant: 'success' } };
export const Warning: Story = { args: { children: 'Draft', variant: 'warning' } };
export const Danger: Story = { args: { children: 'Failed', variant: 'danger' } };
export const Info: Story = { args: { children: 'Processing', variant: 'info' } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      {(['default', 'success', 'warning', 'danger', 'info'] as const).map((v) => (
        <Badge key={v} variant={v}>{v}</Badge>
      ))}
    </div>
  ),
};
