var p=Object.defineProperty;var t=(o,r)=>p(o,"name",{value:r,configurable:!0});import{n as c,s as d,v as n,t as m,b as a,j as b}from"./Skeleton-58bd7688.js";import{r as g}from"./index-66afdacb.js";import"./iframe-7ccdceb7.js";var u=["label","labelColor"],y={name:"1504nod",styles:"font-size:0.875rem;line-height:1.25rem"},s=t(function(o){var r=o.label,e=o.labelColor,l=c(o,u),i=g.useContext(d).textColor;return n("div",{css:y},r&&n("div",{css:["padding:0.25rem;font-size:0.75rem;line-height:1rem;",e&&a("color:",e,";","",""),"","","",""]},r),n("input",m({css:["appearance:none;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.25rem;padding-bottom:0.25rem;border-radius:0.5rem;border-width:2px;outline:2px solid transparent;outline-offset:2px;--tw-border-opacity:1;border-color:rgb(82 82 82 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(64 64 64 / var(--tw-bg-opacity));:focus{--tw-border-opacity:1;border-color:rgb(115 115 115 / var(--tw-border-opacity));}transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;",a("color:",i,";","",""),"","","",""]},l)))},"i");const k={parameters:{storySource:{source:`import React from 'react';

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
`,locationsMap:{primary:{startLoc:{col:47,line:17},endLoc:{col:76,line:17},startBody:{col:47,line:17},endBody:{col:76,line:17}}}}},title:"Example/Input",component:s,argTypes:{backgroundColor:{control:"color"}}},x=t(o=>b.jsx(s,{...o}),"Template"),f=x.bind({});f.args={label:"label",labelColor:"white"};const v=["Primary"];export{f as Primary,v as __namedExportsOrder,k as default};
//# sourceMappingURL=Input.stories-07a1c9a4.js.map
