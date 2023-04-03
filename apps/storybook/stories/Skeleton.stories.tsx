import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Skeleton } from '@woxo/ui';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Skeleton',
  component: Skeleton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: {
      control: {
        type: 'select',
        options: ['text', 'circle', 'square'],
      },
    },
  },
} as ComponentMeta<typeof Skeleton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Skeleton> = (args) => (
  <div style={{ width: '15rem', height: '15rem' }}>
    <Skeleton {...args} />
    <Skeleton {...args} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  animation: 'pulse',
  variant: 'square',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Skeleton",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Skeleton",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Skeleton",
// };
