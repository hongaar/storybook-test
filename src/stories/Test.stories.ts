import type { Meta, StoryObj } from '@storybook/react';
import { Test } from './Test';

const meta = {
  title: 'Example/Test',
  component: Test,
  tags: ['autodocs'],
} satisfies Meta<typeof Test>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};