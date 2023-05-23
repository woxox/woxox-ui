var s=Object.defineProperty;var t=(o,e)=>s(o,"name",{value:e,configurable:!0});import{j as n}from"./Skeleton-58bd7688.js";import{i as r}from"./Button-fb41360c.js";import"./index-66afdacb.js";import"./iframe-7ccdceb7.js";const g={parameters:{storySource:{source:`import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@woxox/ui';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: <span>Button</span>,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"Example/Button",component:r,argTypes:{backgroundColor:{control:"color"}}},a=t(o=>n.jsx(r,{...o}),"Template"),p=a.bind({});p.args={children:n.jsx("span",{children:"Button"})};const u=["Primary"];export{p as Primary,u as __namedExportsOrder,g as default};
//# sourceMappingURL=Button.stories-29f81bb4.js.map
