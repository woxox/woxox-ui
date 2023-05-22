var s=Object.defineProperty;var o=(r,e)=>s(r,"name",{value:e,configurable:!0});import{j as t}from"./Skeleton-d01f91ea.js";import{l as n}from"./Button-8687ccd4.js";import"./index-4ec46995.js";import"./iframe-c3cf687c.js";const g={parameters:{storySource:{source:`import React from 'react';\r
\r
import { ComponentStory, ComponentMeta } from '@storybook/react';\r
import { Button } from '@woxox/ui';\r
\r
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export\r
export default {\r
  title: 'Example/Button',\r
  component: Button,\r
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes\r
  argTypes: {\r
    backgroundColor: { control: 'color' },\r
  },\r
} as ComponentMeta<typeof Button>;\r
\r
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args\r
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;\r
\r
export const Primary = Template.bind({});\r
// More on args: https://storybook.js.org/docs/react/writing-stories/args\r
Primary.args = {\r
  children: <span>Button</span>,\r
};\r
\r
// export const Secondary = Template.bind({});\r
// Secondary.args = {\r
//   label: "Button",\r
// };\r
\r
// export const Large = Template.bind({});\r
// Large.args = {\r
//   size: "large",\r
//   label: "Button",\r
// };\r
\r
// export const Small = Template.bind({});\r
// Small.args = {\r
//   size: "small",\r
//   label: "Button",\r
// };\r
`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"Example/Button",component:n,argTypes:{backgroundColor:{control:"color"}}},a=o(r=>t.jsx(n,{...r}),"Template"),p=a.bind({});p.args={children:t.jsx("span",{children:"Button"})};const u=["Primary"];export{p as Primary,u as __namedExportsOrder,g as default};
//# sourceMappingURL=Button.stories-cf8908b3.js.map
