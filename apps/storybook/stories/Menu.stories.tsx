import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu } from '@woxox/ui';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Menu',
  component: Menu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Menu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  menuItems: [
    { id: 1, label: 'item 1', value: 'value 1' },
    { id: 2, label: 'item 2', value: 'value 2' },
    { id: 3, label: 'item 3', value: 'value 3' },
    { id: 4, label: 'item 4', value: 'value 4' },
    { id: 5, label: 'item 5', value: 'value 5' },
    { id: 6, label: 'item 6', value: 'value 6' },
  ],
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Menu",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Menu",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Menu",
// };
