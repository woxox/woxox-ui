var a=Object.defineProperty;var n=(r,t)=>a(r,"name",{value:t,configurable:!0});import{H as e,j as o}from"./Skeleton-d01f91ea.js";import"./index-4ec46995.js";import"./iframe-c3cf687c.js";const d={parameters:{storySource:{source:`import React from 'react';\r
\r
import { ComponentStory, ComponentMeta } from '@storybook/react';\r
import { Skeleton } from '@woxox/ui';\r
\r
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export\r
export default {\r
  title: 'Example/Skeleton',\r
  component: Skeleton,\r
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes\r
  argTypes: {\r
    backgroundColor: { control: 'color' },\r
    variant: {\r
      control: {\r
        type: 'select',\r
        options: ['text', 'circle', 'square'],\r
      },\r
    },\r
  },\r
} as ComponentMeta<typeof Skeleton>;\r
\r
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args\r
const Template: ComponentStory<typeof Skeleton> = (args) => (\r
  <div style={{ width: '15rem', height: '15rem' }}>\r
    <Skeleton {...args} />\r
    <Skeleton {...args} />\r
  </div>\r
);\r
\r
export const Primary = Template.bind({});\r
// More on args: https://storybook.js.org/docs/react/writing-stories/args\r
Primary.args = {\r
  animation: 'pulse',\r
  variant: 'square',\r
};\r
\r
// export const Secondary = Template.bind({});\r
// Secondary.args = {\r
//   label: "Skeleton",\r
// };\r
\r
// export const Large = Template.bind({});\r
// Large.args = {\r
//   size: "large",\r
//   label: "Skeleton",\r
// };\r
\r
// export const Small = Template.bind({});\r
// Small.args = {\r
//   size: "small",\r
//   label: "Skeleton",\r
// };\r
`,locationsMap:{primary:{startLoc:{col:50,line:23},endLoc:{col:1,line:28},startBody:{col:50,line:23},endBody:{col:1,line:28}}}}},title:"Example/Skeleton",component:e,argTypes:{backgroundColor:{control:"color"},variant:{control:{type:"select",options:["text","circle","square"]}}}},s=n(r=>o.jsxs("div",{style:{width:"15rem",height:"15rem"},children:[o.jsx(e,{...r}),o.jsx(e,{...r})]}),"Template"),l=s.bind({});l.args={animation:"pulse",variant:"square"};const g=["Primary"];export{l as Primary,g as __namedExportsOrder,d as default};
//# sourceMappingURL=Skeleton.stories-1e5203a6.js.map
