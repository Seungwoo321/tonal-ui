import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '../src/components/Container';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container style={{ background: 'var(--color-surface-container)', padding: '2rem' }}>
      <p style={{ color: 'var(--color-on-surface-variant)' }}>max-w-7xl container</p>
    </Container>
  ),
};

export const Narrow: Story = {
  render: () => (
    <Container size="narrow" style={{ background: 'var(--color-surface-container)', padding: '2rem' }}>
      <p style={{ color: 'var(--color-on-surface-variant)' }}>max-w-4xl narrow container</p>
    </Container>
  ),
};
