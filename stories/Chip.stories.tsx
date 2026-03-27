import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '../src/components/Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const CategoryPills: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Chip variant="filled" active>All</Chip>
      <Chip variant="filled">AI</Chip>
      <Chip variant="filled">LLM</Chip>
      <Chip variant="filled">Cloud</Chip>
    </div>
  ),
};

export const TonalVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Chip variant="tonal" active>Selected</Chip>
      <Chip variant="tonal">Option A</Chip>
      <Chip variant="tonal">Option B</Chip>
    </div>
  ),
};

export const OutlineVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Chip variant="outline" active>Active</Chip>
      <Chip variant="outline">Inactive</Chip>
    </div>
  ),
};
