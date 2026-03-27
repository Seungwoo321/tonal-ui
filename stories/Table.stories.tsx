import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../src/components';

const meta: Meta = {
  title: 'Components/Table',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Article One</Table.Cell>
          <Table.Cell>Published</Table.Cell>
          <Table.Cell>2026-03-20</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Article Two</Table.Cell>
          <Table.Cell>Draft</Table.Cell>
          <Table.Cell>2026-03-22</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
};
