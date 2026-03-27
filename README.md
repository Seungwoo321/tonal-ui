# tonal-ui

A design system built on the principle of **Tonal Layering** — using surface color depth instead of borders to create visual hierarchy. Designed for editorial platforms that need clean, authoritative aesthetics with full dark mode and CJK typography support.

## Design Philosophy

### Tonal Layering

Traditional UI uses borders (1px lines) to separate elements. Tonal Layering replaces borders with **background color depth**, creating a premium feel like sheets of fine paper stacked on a surface.

```
Level 0: surface          — Page background (subtle cool white)
Level 1: surface-container-low  — Section backgrounds
Level 2: surface-container-lowest — Interactive cards (pure white, "floating")
```

Elements feel elevated not by shadows or borders, but by tonal contrast alone.

### Core Rules

- **No-Line Rule**: Never use 1px borders to section content. Define boundaries through background color shifts.
- **Ambient Shadows**: When elements must float, use diffused shadows (blur 20px+, tinted — never pure black).
- **Ghost Border Fallback**: If accessibility requires a border, use `outline-variant` at 15% opacity.
- **Breathe Principle**: Use generous spacing (64px+) between major sections.

## Features

- **18 components** with CVA (class-variance-authority) variants
- **Compound Pattern** for Table and Card (namespace exports)
- **CSS variable-based dark mode** — no `dark:` prefix needed
- **CJK typography** — Optimized for English, Korean, Japanese, and Chinese
- **Surface-first color tokens** — Palette → Semantic → Theme → Utility chain
- **Tailwind CSS v4** — Built CSS exported, consumers just import

## Installation

```bash
npm install tonal-ui
# or
pnpm add tonal-ui
```

## Usage

### CSS Import (required)

```css
/* your app's globals.css */
@import "tailwindcss";
@import "tonal-ui/styles.css";
```

### Components

```tsx
import { Button, Badge, Alert } from 'tonal-ui';
import * as Card from 'tonal-ui/Card';
import * as Table from 'tonal-ui/Table';

// Simple components
<Button variant="primary" size="md">Click me</Button>
<Badge variant="success">Active</Badge>

// Compound components
<Card.Root>
  <Card.Header>
    <Card.Title>Title</Card.Title>
  </Card.Header>
  <Card.Body>Content</Card.Body>
</Card.Root>
```

## Components

### Simple (named export)

| Component | Variants |
|-----------|----------|
| `Button` | primary, secondary, danger, outline, ghost × sm, md, lg |
| `Badge` | default, success, warning, danger, info |
| `Alert` | info, success, warning, error |
| `Input` | default, error × sm, md, lg |
| `Select` | default × sm, md, lg |
| `Switch` | default × sm, md |
| `Chip` | default, active |
| `IconButton` | default, ghost × sm, md, lg |
| `Modal` | sm, md, lg, xl |
| `ProgressBar` | default, success, warning, error × sm, md, lg |
| `Toast` | info, success, warning, error |
| `Container` | sm, md, lg, xl, full |
| `Divider` | horizontal, vertical |
| `HeroBadge` | — |
| `SidebarCard` | — |
| `RadioGroup` | — |

### Compound (namespace export)

| Component | Sub-components |
|-----------|---------------|
| `Card` | Root, Header, Title, Body, Footer |
| `Table` | Root, Head, Body, Row, HeaderCell, Cell |

## Color Tokens

### Surface Hierarchy

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `surface` | `#faf8ff` | `#11141d` | Page background |
| `surface-container-low` | `#f3f3fe` | `#191b23` | Section background |
| `surface-container-lowest` | `#ffffff` | `#0f111a` | Cards, elevated elements |
| `surface-container-high` | `#e7e7f3` | `#282a36` | Recessed areas |

### Semantic Colors

| Role | Token |
|------|-------|
| Primary | `primary`, `primary-container`, `on-primary` |
| Secondary | `secondary`, `secondary-container`, `on-secondary` |
| Tertiary | `tertiary`, `tertiary-container`, `on-tertiary` |
| Error | `error`, `error-container`, `on-error` |
| Success | `success`, `success-container`, `on-success` |

## Typography

| Role | Font | Size |
|------|------|------|
| Headlines | Manrope | — |
| Body | Inter + CJK fallback | 1rem, line-height 1.75 |
| Labels | Inter | 0.75rem, uppercase, tracking 0.05em |

CJK fallback: `"Apple SD Gothic Neo", "Noto Sans KR", system-ui`

## Tech Stack

- React 19+
- Tailwind CSS v4
- CVA (class-variance-authority)
- clsx + tailwind-merge
- tsup (JS build) + @tailwindcss/cli (CSS build)

## Development

```bash
pnpm install
pnpm build          # Build JS + CSS
pnpm dev            # Watch mode (JS only)
pnpm storybook      # Component playground
pnpm typecheck      # TypeScript check
```

## License

MIT
