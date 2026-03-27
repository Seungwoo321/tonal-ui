import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast } from '../src/components/Toast';
import { Button } from '../src/components/Button';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Button onClick={() => setShow(true)}>Show Toast</Button>
        {show && <Toast variant="success" message="Operation completed!" onClose={() => setShow(false)} />}
      </>
    );
  },
};
