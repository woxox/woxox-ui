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

export const Primary: Story = {
  args: { label: 'Label' },
};

export const Outlined: Story = {
  args: {
    label: 'Label',
    variant: 'outlined',
  },
};

export const Underlined: Story = {
  args: {
    label: 'Label',
    variant: 'underlined',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    disabled: true,
  },
};

export const Placeholder: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Input {...args} label="Label" size={size} />
      ))}
    </div>
  ),
};
