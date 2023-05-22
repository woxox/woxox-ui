import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List } from '@woxox/ui';

import { ListUsage } from './ListUsage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/List',
  component: List,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof List>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const ListUsageExample = ListUsage;
// export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   listItem: [
//     { id: '1', content: <span>1</span> },
//     { id: '2', content: <span>2</span> },
//     { id: '3', content: <span>3</span> },
//   ],
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "List",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "List",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "List",
// };
