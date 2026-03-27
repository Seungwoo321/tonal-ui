#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const palette = fs.readFileSync(path.join(root, 'src/tokens/palette.css'), 'utf8');
const colors = fs.readFileSync(path.join(root, 'src/tokens/colors.css'), 'utf8');
const typography = fs.readFileSync(path.join(root, 'src/tokens/typography.css'), 'utf8');
const theme = fs.readFileSync(path.join(root, 'src/tokens/theme.css'), 'utf8');

const consumer = `
/* tonal-ui consumer theme */
@plugin "@tailwindcss/typography";
@custom-variant dark (&:where(.dark, .dark *));

${palette}
${colors}
${typography}
${theme}
`;

const stylesPath = path.join(root, 'dist/styles.css');
const existing = fs.readFileSync(stylesPath, 'utf8');
fs.writeFileSync(stylesPath, consumer + existing);
console.log('Prepended consumer theme to dist/styles.css');
