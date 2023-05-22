import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip } from '@woxo/ui';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Tooltip',
  component: Tooltip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: {
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: <span>Hover Me</span>,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Tooltip",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Tooltip",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Tooltip",
// };
