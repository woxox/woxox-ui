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

export const Outlined: Story = {
  args: {
    children: 'Tag',
    variant: 'outlined',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Tag {...args} size="sm">
        Small
      </Tag>
      <Tag {...args} size="md" color="red">
        Medium
      </Tag>
      <Tag {...args} size="md" variant="outlined" color="red">
        Medium
      </Tag>
      <Tag {...args} size="lg">
        Large
      </Tag>
    </div>
  ),
};
