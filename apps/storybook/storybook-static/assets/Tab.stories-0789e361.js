var w=Object.defineProperty;var c=(r,n)=>w(r,"name",{value:n,configurable:!0});import{v as t,s as C,c as S,a as d,b as M,j as e}from"./Skeleton-d01f91ea.js";import{r as i}from"./index-4ec46995.js";import{d as B}from"./index-ee293eb1.js";import"./iframe-c3cf687c.js";var R={name:"bjn8wh",styles:"position:relative"},z={name:"n6k2tj",styles:"position:relative;top:-1px;z-index:10;height:1px;--tw-bg-opacity:1;background-color:rgb(163 163 163 / var(--tw-bg-opacity))"},E={name:"zjik7",styles:"display:flex"},v=c(function(r){var n=r.tabs,l=r.fallback,p=l===void 0?t("span",null,"not selected"):l,b=r.underline,a=b===void 0||b,m=r.cursorSweep,u=m===void 0||m,f=i.useContext(C).textColor,T=i.useState(),y=S(T,2),o=y[0],h=y[1],j=i.useMemo(function(){return n.map(function(g,x){var s=o===x;return t("div",{css:R,onClick:function(){return h(x)},key:g.title},t("div",{css:["padding-left:1rem;padding-right:1rem;padding-top:0.375rem;padding-bottom:0.375rem;cursor:pointer;user-select:none;",a&&{borderBottomWidth:"1px","--tw-border-opacity":"1",borderBottomColor:"rgb(82 82 82 / var(--tw-border-opacity))"},"","","",""]},g.title),s&&u&&t(d.div,{css:["position:absolute;top:0px;left:0px;bottom:0px;right:0px;z-index:-10;border-radius:0.375rem;",a&&{borderBottomRightRadius:"0px",borderBottomLeftRadius:"0px"},s&&{"--tw-bg-opacity":"1",backgroundColor:"rgb(64 64 64 / var(--tw-bg-opacity))"},"","","",""],transition:{type:"spring",damping:25,stiffness:400},layoutId:"cursor"}),s&&a&&t(d.div,{css:z,layoutId:"underline"}))})},[u,o,n,a]),k=i.useMemo(function(){return o!==void 0&&n[o]?n[o].content:p},[p,o,n]);return t("div",{css:[M("color:",f,";","",""),"","","",""]},t("div",{css:E},j),t(B,{mode:"wait"},t(d.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.1},key:o??"empty"},k)))},"W");const J={parameters:{storySource:{source:`import React from 'react';\r
\r
import { ComponentStory, ComponentMeta } from '@storybook/react';\r
import { Tab } from '@woxox/ui';\r
\r
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export\r
export default {\r
  title: 'Example/Tab',\r
  component: Tab,\r
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes\r
  argTypes: {\r
    backgroundColor: { control: 'color' },\r
  },\r
} as ComponentMeta<typeof Tab>;\r
\r
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args\r
const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;\r
\r
export const Primary = Template.bind({});\r
// More on args: https://storybook.js.org/docs/react/writing-stories/args\r
Primary.args = {\r
  tabs: [\r
    { title: '1 tab', content: <div>1 tab content</div> },\r
    { title: '2 tab', content: <div>2 tab content</div> },\r
    { title: '3 tab', content: <div>3 tab content</div> },\r
    { title: '4 tab', content: <div>4 tab content</div> },\r
    { title: '5 tab', content: <div>5 tab content</div> },\r
  ],\r
  underline: true,\r
  cursorSweep: true,\r
};\r
\r
// export const Secondary = Template.bind({});\r
// Secondary.args = {\r
//   label: "Tab",\r
// };\r
\r
// export const Large = Template.bind({});\r
// Large.args = {\r
//   size: "large",\r
//   label: "Tab",\r
// };\r
\r
// export const Small = Template.bind({});\r
// Small.args = {\r
//   size: "small",\r
//   label: "Tab",\r
// };\r
`,locationsMap:{primary:{startLoc:{col:45,line:17},endLoc:{col:72,line:17},startBody:{col:45,line:17},endBody:{col:72,line:17}}}}},title:"Example/Tab",component:v,argTypes:{backgroundColor:{control:"color"}}},L=c(r=>e.jsx(v,{...r}),"Template"),P=L.bind({});P.args={tabs:[{title:"1 tab",content:e.jsx("div",{children:"1 tab content"})},{title:"2 tab",content:e.jsx("div",{children:"2 tab content"})},{title:"3 tab",content:e.jsx("div",{children:"3 tab content"})},{title:"4 tab",content:e.jsx("div",{children:"4 tab content"})},{title:"5 tab",content:e.jsx("div",{children:"5 tab content"})}],underline:!0,cursorSweep:!0};const N=["Primary"];export{P as Primary,N as __namedExportsOrder,J as default};
//# sourceMappingURL=Tab.stories-0789e361.js.map
