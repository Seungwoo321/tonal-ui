import type { Meta, StoryObj } from '@storybook/react';

function TypographySamples() {
  return (
    <div style={{ maxWidth: '640px' }}>
      <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: '1.75rem', marginBottom: '1rem' }}>
        Headline (Manrope)
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.85, marginBottom: '2rem' }}>
        Body text uses Inter with generous line-height for readability.
        The Pulse Editorial Design System prioritizes clean typography
        with surface-first tonal layering.
      </p>
      <div className="prose" style={{ maxWidth: 'none' }}>
        <h2>Prose H2 Heading</h2>
        <h3>Prose H3 Heading</h3>
        <p>
          This is a prose paragraph with <strong>bold text</strong>, <a href="#">links</a>,
          and <code>inline code</code> styled by the typography plugin overrides.
        </p>
        <ul>
          <li>First item with custom bullet</li>
          <li>Second item with custom bullet</li>
        </ul>
      </div>
    </div>
  );
}

const meta: Meta = {
  title: 'Tokens/Typography',
  component: TypographySamples,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
