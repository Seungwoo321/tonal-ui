import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../src/components';

const meta: Meta = {
  title: 'Components/Card',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Card.Root>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
      </Card.Header>
      <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.875rem' }}>
        Card content goes here.
      </p>
    </Card.Root>
  ),
};

export const NoPadding: Story = {
  render: () => (
    <Card.Root padding={false}>
      <div style={{ padding: '1.5rem' }}>Custom padding content</div>
    </Card.Root>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Card.Root variant="filled">
        <Card.Header>
          <Card.Title>Filled (default)</Card.Title>
        </Card.Header>
        <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.875rem' }}>
          border + bg-surface-container-lowest + shadow-sm
        </p>
      </Card.Root>

      <Card.Root variant="elevated">
        <Card.Header>
          <Card.Title>Elevated</Card.Title>
        </Card.Header>
        <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.875rem' }}>
          border + bg-surface-container-lowest + shadow-md
        </p>
      </Card.Root>

      <Card.Root variant="outlined">
        <Card.Header>
          <Card.Title>Outlined</Card.Title>
        </Card.Header>
        <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.875rem' }}>
          border + bg-transparent + no shadow
        </p>
      </Card.Root>
    </div>
  ),
};
