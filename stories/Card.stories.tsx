import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle } from '../src/components/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.875rem' }}>
        Card content goes here.
      </p>
    </Card>
  ),
};

export const NoPadding: Story = {
  render: () => (
    <Card padding={false}>
      <div style={{ padding: '1.5rem' }}>Custom padding content</div>
    </Card>
  ),
};
