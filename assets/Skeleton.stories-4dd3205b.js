var a=Object.defineProperty;var t=(o,r)=>a(o,"name",{value:r,configurable:!0});import{i as n,j as e}from"./Skeleton-58bd7688.js";import"./index-66afdacb.js";import"./iframe-7ccdceb7.js";const d={parameters:{storySource:{source:`import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Skeleton } from '@woxox/ui';

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
`,locationsMap:{primary:{startLoc:{col:50,line:23},endLoc:{col:1,line:28},startBody:{col:50,line:23},endBody:{col:1,line:28}}}}},title:"Example/Skeleton",component:n,argTypes:{backgroundColor:{control:"color"},variant:{control:{type:"select",options:["text","circle","square"]}}}},s=t(o=>e.jsxs("div",{style:{width:"15rem",height:"15rem"},children:[e.jsx(n,{...o}),e.jsx(n,{...o})]}),"Template"),l=s.bind({});l.args={animation:"pulse",variant:"square"};const g=["Primary"];export{l as Primary,g as __namedExportsOrder,d as default};
//# sourceMappingURL=Skeleton.stories-4dd3205b.js.map
