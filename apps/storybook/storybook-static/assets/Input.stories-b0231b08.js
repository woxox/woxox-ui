var p=Object.defineProperty;var t=(r,o)=>p(r,"name",{value:o,configurable:!0});import{n as c,s as d,v as n,t as m,b as a,j as b}from"./Skeleton-d01f91ea.js";import{r as g}from"./index-4ec46995.js";import"./iframe-c3cf687c.js";var u=["label","labelColor"],y={name:"1504nod",styles:"font-size:0.875rem;line-height:1.25rem"},s=t(function(r){var o=r.label,e=r.labelColor,l=c(r,u),i=g.useContext(d).textColor;return n("div",{css:y},o&&n("div",{css:["padding:0.25rem;font-size:0.75rem;line-height:1rem;",e&&a("color:",e,";","",""),"","","",""]},o),n("input",m({css:["appearance:none;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.25rem;padding-bottom:0.25rem;border-radius:0.5rem;border-width:2px;outline:2px solid transparent;outline-offset:2px;--tw-border-opacity:1;border-color:rgb(82 82 82 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(64 64 64 / var(--tw-bg-opacity));:focus{--tw-border-opacity:1;border-color:rgb(115 115 115 / var(--tw-border-opacity));}transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;",a("color:",i,";","",""),"","","",""]},l)))},"i");const k={parameters:{storySource:{source:`import React from 'react';\r
\r
import { ComponentStory, ComponentMeta } from '@storybook/react';\r
import { Input } from '@woxox/ui';\r
\r
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export\r
export default {\r
  title: 'Example/Input',\r
  component: Input,\r
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes\r
  argTypes: {\r
    backgroundColor: { control: 'color' },\r
  },\r
} as ComponentMeta<typeof Input>;\r
\r
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args\r
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;\r
\r
export const Primary = Template.bind({});\r
// More on args: https://storybook.js.org/docs/react/writing-stories/args\r
Primary.args = {\r
  label: 'label',\r
  labelColor: 'white',\r
};\r
\r
// export const Secondary = Template.bind({});\r
// Secondary.args = {\r
//   label: "Input",\r
// };\r
\r
// export const Large = Template.bind({});\r
// Large.args = {\r
//   size: "large",\r
//   label: "Input",\r
// };\r
\r
// export const Small = Template.bind({});\r
// Small.args = {\r
//   size: "small",\r
//   label: "Input",\r
// };\r
`,locationsMap:{primary:{startLoc:{col:47,line:17},endLoc:{col:76,line:17},startBody:{col:47,line:17},endBody:{col:76,line:17}}}}},title:"Example/Input",component:s,argTypes:{backgroundColor:{control:"color"}}},x=t(r=>b.jsx(s,{...r}),"Template"),f=x.bind({});f.args={label:"label",labelColor:"white"};const v=["Primary"];export{f as Primary,v as __namedExportsOrder,k as default};
//# sourceMappingURL=Input.stories-b0231b08.js.map
