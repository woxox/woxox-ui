import type { Meta, StoryObj } from '@storybook/react';

import { Button, Select } from '@woxox/ui';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Select.Root> = {
  title: 'Example/Select',
  component: Select.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {
    children: (
      <>
        <Select.Trigger>
          <Button>Trigger</Button>
        </Select.Trigger>
        <Select.Popover>
          <Select.Item id="1" value="1">
            Item-1
          </Select.Item>
          <Select.Item id="2" value="2">
            Item-2
          </Select.Item>
        </Select.Popover>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: (
      <>
        <Select.Trigger>
          <Button>Trigger</Button>
        </Select.Trigger>
        <Select.Popover>
          <Select.Item id="1" value="1">
            Item-1
          </Select.Item>
          <Select.Item id="2" value="2">
            Item-2
          </Select.Item>
        </Select.Popover>
      </>
    ),
  },
};
