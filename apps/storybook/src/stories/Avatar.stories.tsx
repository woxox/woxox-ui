import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from "@woxox/ui";

const meta: Meta<typeof Avatar> = {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Custom: Story = {
  args: {
    src: 'https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg'
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Avatar {...args} size={size}>
          {size}
        </Avatar>
      ))}
    </div>
  ),
};
