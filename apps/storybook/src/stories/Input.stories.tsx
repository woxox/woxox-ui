import { Meta, StoryObj } from '@storybook/react';

import { Input } from '@woxox/ui';

const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
