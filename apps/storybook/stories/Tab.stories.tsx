import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tab } from '@woxox/ui';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Tab',
  component: Tab,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tab>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  tabs: [
    { title: '1 tab', content: <div>1 tab content</div> },
    { title: '2 tab', content: <div>2 tab content</div> },
    { title: '3 tab', content: <div>3 tab content</div> },
    { title: '4 tab', content: <div>4 tab content</div> },
    { title: '5 tab', content: <div>5 tab content</div> },
  ],
  underline: true,
  cursorSweep: true,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Tab",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Tab",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Tab",
// };
