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

export const Outlined: Story = {
  args: { variant: 'outlined' },
};

// export const Underlined: Story = {
//   args: { variant: 'underlined' },
// };

export const Disabled: Story = {
  args: { disabled: true },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Input {...args} size={size} />
      ))}
    </div>
  ),
};
