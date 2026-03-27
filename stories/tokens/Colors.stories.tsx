import type { Meta, StoryObj } from '@storybook/react';

const paletteGroups = [
  { name: 'Blue (Primary)', prefix: 'palette-blue', scales: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'Indigo (Secondary)', prefix: 'palette-indigo', scales: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'Orange (Tertiary)', prefix: 'palette-orange', scales: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'Neutral (Surface)', prefix: 'palette-neutral', scales: ['0', '50', '100', '150', '200', '250', '300', '400', '500', '600', '700', '800', '900', '950', '1000'] },
  { name: 'Red (Error)', prefix: 'palette-red', scales: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'Green (Success)', prefix: 'palette-green', scales: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'Yellow (Warning)', prefix: 'palette-yellow', scales: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'Sky (Info)', prefix: 'palette-sky', scales: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
];

const semanticGroups = [
  { name: 'Surface', tokens: ['surface', 'surface-bright', 'surface-dim', 'surface-container-lowest', 'surface-container-low', 'surface-container', 'surface-container-high', 'surface-container-highest', 'surface-variant'] },
  { name: 'Primary', tokens: ['primary', 'primary-container', 'on-primary', 'on-primary-container'] },
  { name: 'Secondary', tokens: ['secondary', 'secondary-container', 'on-secondary', 'on-secondary-container'] },
  { name: 'Tertiary', tokens: ['tertiary', 'tertiary-container', 'on-tertiary', 'on-tertiary-container'] },
  { name: 'Error', tokens: ['error', 'error-container', 'on-error', 'on-error-container'] },
  { name: 'Success', tokens: ['success', 'success-container', 'on-success', 'on-success-container'] },
  { name: 'Warning', tokens: ['warning', 'warning-container', 'on-warning', 'on-warning-container'] },
  { name: 'Info', tokens: ['info', 'info-container', 'on-info', 'on-info-container'] },
  { name: 'On-surface & Outline', tokens: ['on-surface', 'on-surface-variant', 'outline', 'outline-variant'] },
];

function Swatch({ varName, label }: { varName: string; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem', minWidth: 0 }}>
      <div style={{ width: '100%', height: '40px', borderRadius: '6px', backgroundColor: `var(--${varName})`, border: '1px solid rgba(0,0,0,0.08)' }} />
      <span style={{ fontSize: '0.65rem', color: '#888', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>
    </div>
  );
}

function PaletteView() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700 }}>Color Palette</h2>
      {paletteGroups.map((group) => (
        <div key={group.name}>
          <h3 style={{ margin: '0 0 0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>{group.name}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${group.scales.length}, 1fr)`, gap: '0.25rem' }}>
            {group.scales.map((scale) => (
              <Swatch key={scale} varName={`${group.prefix}-${scale}`} label={scale} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SemanticView() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700 }}>Semantic Tokens</h2>
      {semanticGroups.map((group) => (
        <div key={group.name}>
          <h3 style={{ margin: '0 0 0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>{group.name}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.25rem' }}>
            {group.tokens.map((token) => (
              <Swatch key={token} varName={`color-${token}`} label={token} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const meta: Meta = {
  title: 'Tokens/Colors',
};

export default meta;
type Story = StoryObj;

export const Palette: Story = { render: () => <PaletteView /> };
export const Semantic: Story = { render: () => <SemanticView /> };
