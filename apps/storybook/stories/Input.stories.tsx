import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '@woxox/ui';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'label',
  labelColor: 'white',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Input",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Input",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Input",
// };
