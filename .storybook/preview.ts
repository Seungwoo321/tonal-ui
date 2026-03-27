import type { Preview } from '@storybook/react';
import '../dist/styles.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#faf8ff' },
        { name: 'dark', value: '#111827' },
      ],
    },
  },
};

export default preview;
