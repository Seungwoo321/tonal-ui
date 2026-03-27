import type { Meta, StoryObj } from '@storybook/react';
import { SidebarCard } from '../src/components/SidebarCard';

const meta: Meta<typeof SidebarCard> = {
  title: 'Components/SidebarCard',
  component: SidebarCard,
};

export default meta;
type Story = StoryObj<typeof SidebarCard>;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: '320px' }}>
      <SidebarCard
        title="Trending"
        icon={
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-primary)' }}>#1 Trending</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-on-surface)' }}>AI Agents</div>
            <div style={{ fontSize: '10px', color: 'var(--color-outline)', marginTop: '4px' }}>5 Articles</div>
          </div>
          <div>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-primary)' }}>#2 Trending</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-on-surface)' }}>LLM</div>
            <div style={{ fontSize: '10px', color: 'var(--color-outline)', marginTop: '4px' }}>3 Articles</div>
          </div>
        </div>
      </SidebarCard>
    </div>
  ),
};
