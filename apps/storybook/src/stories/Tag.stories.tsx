import { Meta, StoryObj } from '@storybook/react';
import { Tag } from '@woxox/ui';

const meta: Meta<typeof Tag> = {
  title: 'Example/Tag',
  component: Tag,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Tag',
  },
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      {(['default', 'red', 'green', 'blue'] as const).map((color) => (
        <Tag {...args} color={color}>
          {color}
        </Tag>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Tag {...args} size={size}>
          {size}
        </Tag>
      ))}
    </div>
  ),
};
