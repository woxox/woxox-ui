var d=Object.defineProperty;var r=(o,t)=>d(o,"name",{value:t,configurable:!0});import{n as g,s as y,c as u,v as n,a as b,t as x,b as T,j as p}from"./Skeleton-908d139e.js";import{r as s}from"./index-6edbd2da.js";import{d as f}from"./index-13a04edd.js";import"./iframe-8489ce6c.js";var v=["children"],h={name:"bjn8wh",styles:"position:relative"},l=r(function(o){o.children;var t=g(o,v),c=s.useContext(y).textColor,m=s.useState(!1),e=u(m,2),a=e[0],i=e[1];return n("div",{css:h,onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)}},n(f,null,a&&n(b.div,x({css:["position:absolute;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem;border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgb(23 23 23 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));",T("color:",c,";","",""),a&&{visibility:"visible"},"","","",""],transition:{type:"spring",duration:.3},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},t),"tooltip")))},"Z");const L={parameters:{storySource:{source:`import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip } from '@woxox/ui';

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
`,locationsMap:{primary:{startLoc:{col:49,line:22},endLoc:{col:80,line:22},startBody:{col:49,line:22},endBody:{col:80,line:22}}}}},title:"Example/Tooltip",component:l,argTypes:{backgroundColor:{control:"color"},variant:{control:{type:"select"}}}},M=r(o=>p.jsx(l,{...o}),"Template"),j=M.bind({});j.args={children:p.jsx("span",{children:"Hover Me"})};const P=["Primary"];export{j as Primary,P as __namedExportsOrder,L as default};
//# sourceMappingURL=Tooltip.stories-68cabe20.js.map
