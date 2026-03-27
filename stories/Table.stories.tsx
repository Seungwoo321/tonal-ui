import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from '../src/components/Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>Date</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Article One</TableCell>
          <TableCell>Published</TableCell>
          <TableCell>2026-03-20</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Article Two</TableCell>
          <TableCell>Draft</TableCell>
          <TableCell>2026-03-22</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
