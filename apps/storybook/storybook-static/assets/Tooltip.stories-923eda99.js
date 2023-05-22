var d=Object.defineProperty;var t=(r,o)=>d(r,"name",{value:o,configurable:!0});import{n as g,s as y,c as u,v as n,a as b,t as x,b as T,j as p}from"./Skeleton-d01f91ea.js";import{r as s}from"./index-4ec46995.js";import{d as f}from"./index-ee293eb1.js";import"./iframe-c3cf687c.js";var v=["children"],h={name:"bjn8wh",styles:"position:relative"},l=t(function(r){r.children;var o=g(r,v),c=s.useContext(y).textColor,m=s.useState(!1),e=u(m,2),a=e[0],i=e[1];return n("div",{css:h,onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)}},n(f,null,a&&n(b.div,x({css:["position:absolute;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem;border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgb(23 23 23 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));",T("color:",c,";","",""),a&&{visibility:"visible"},"","","",""],transition:{type:"spring",duration:.3},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},o),"tooltip")))},"u");const L={parameters:{storySource:{source:`import React from 'react';\r
\r
import { ComponentStory, ComponentMeta } from '@storybook/react';\r
import { Tooltip } from '@woxox/ui';\r
\r
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export\r
export default {\r
  title: 'Example/Tooltip',\r
  component: Tooltip,\r
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes\r
  argTypes: {\r
    backgroundColor: { control: 'color' },\r
    variant: {\r
      control: {\r
        type: 'select',\r
      },\r
    },\r
  },\r
} as ComponentMeta<typeof Tooltip>;\r
\r
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args\r
const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;\r
\r
export const Primary = Template.bind({});\r
// More on args: https://storybook.js.org/docs/react/writing-stories/args\r
Primary.args = {\r
  children: <span>Hover Me</span>,\r
};\r
\r
// export const Secondary = Template.bind({});\r
// Secondary.args = {\r
//   label: "Tooltip",\r
// };\r
\r
// export const Large = Template.bind({});\r
// Large.args = {\r
//   size: "large",\r
//   label: "Tooltip",\r
// };\r
\r
// export const Small = Template.bind({});\r
// Small.args = {\r
//   size: "small",\r
//   label: "Tooltip",\r
// };\r
`,locationsMap:{primary:{startLoc:{col:49,line:22},endLoc:{col:80,line:22},startBody:{col:49,line:22},endBody:{col:80,line:22}}}}},title:"Example/Tooltip",component:l,argTypes:{backgroundColor:{control:"color"},variant:{control:{type:"select"}}}},M=t(r=>p.jsx(l,{...r}),"Template"),j=M.bind({});j.args={children:p.jsx("span",{children:"Hover Me"})};const P=["Primary"];export{j as Primary,P as __namedExportsOrder,L as default};
//# sourceMappingURL=Tooltip.stories-923eda99.js.map
