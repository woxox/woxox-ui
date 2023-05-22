var w=Object.defineProperty;var m=(r,i)=>w(r,"name",{value:i,configurable:!0});import{s as k,c as y,v as e,a as s,b as C,j as S}from"./Skeleton-d01f91ea.js";import{r as a}from"./index-4ec46995.js";import{l as T}from"./Button-8687ccd4.js";import{d as v}from"./index-ee293eb1.js";import"./iframe-c3cf687c.js";var j={name:"1te1vur",styles:"position:relative;cursor:pointer"},L={name:"1g4uaou",styles:"position:relative;z-index:20;padding-left:1rem;padding-right:1rem;padding-top:0.25rem;padding-bottom:0.25rem"},E={name:"aom9d3",styles:"position:absolute;top:0px;left:0px;right:0px;bottom:0px;z-index:10;--tw-bg-opacity:1;background-color:rgb(82 82 82 / var(--tw-bg-opacity))"},_={name:"1nrevy2",styles:"position:relative;display:inline-block"},z={name:"nnciq5",styles:"display:flex;min-width:8.5rem;justify-content:space-between"},B={name:"w1ee69",styles:"margin-left:0px;margin-right:0px;margin-top:auto;margin-bottom:auto"},b=m(function(r){var i=r.menuItems,n=r.onChange,p=a.useContext(k).textColor,x=a.useState(),u=y(x,2),t=u[0],d=u[1],f=a.useState(!1),c=y(f,2),l=c[0],h=c[1],g=a.useCallback(function(o){o.id===(t==null?void 0:t.id)?(d(void 0),n==null||n(void 0)):(d(o),n==null||n(o))},[n,t==null?void 0:t.id]),M=a.useMemo(function(){return i.map(function(o){return e(s.li,{key:o.id,css:j,variants:{open:{opacity:1,y:0,transition:{type:"spring",stiffness:300,damping:24}},closed:{opacity:0,y:20,transition:{duration:.2}}},onClick:function(){return g(o)}},e("div",{css:L},o.label),e(v,{mode:"wait"},(t==null?void 0:t.id)===o.id&&e(s.div,{css:E,transition:{type:"spring",stiffness:400,damping:25},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},layoutId:"menu_list_cursor"})))})},[g,i,t]);return e("div",{css:_},e(T,{onClick:function(){return h(!l)},css:z},t?t.label:"Not Selected",e(s.div,{css:B,variants:{open:{rotate:-180},closed:{rotate:0}},transition:{duration:.2},animate:l?"open":"closed"},e("svg",{fill:p,width:"0.8rem",height:"0.8rem",viewBox:"0 0 20 20"},e("path",{d:"M0 7 L 20 7 L 10 16"})))),e(v,null,l&&e(s.ul,{css:["position:absolute;margin-top:0.25rem;margin-bottom:0.25rem;min-width:100%;user-select:none;overflow:hidden;border-radius:0.25rem;--tw-bg-opacity:1;background-color:rgb(38 38 38 / var(--tw-bg-opacity));",C("color:",p,";","",""),"","","",""],variants:{open:{opacity:1,height:"auto",transition:{delayChildren:.15,staggerChildren:.05}},closed:{opacity:0,height:0,transition:{duration:.15}}},animate:l?"open":"closed",initial:"closed",exit:"closed"},M)))},"y");const V={parameters:{storySource:{source:`import React from 'react';\r
\r
import { ComponentStory, ComponentMeta } from '@storybook/react';\r
import { Menu } from '@woxox/ui';\r
\r
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export\r
export default {\r
  title: 'Example/Menu',\r
  component: Menu,\r
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes\r
  argTypes: {\r
    backgroundColor: { control: 'color' },\r
  },\r
} as ComponentMeta<typeof Menu>;\r
\r
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args\r
const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;\r
\r
export const Primary = Template.bind({});\r
// More on args: https://storybook.js.org/docs/react/writing-stories/args\r
Primary.args = {\r
  menuItems: [\r
    { id: 1, label: 'item 1', value: 'value 1' },\r
    { id: 2, label: 'item 2', value: 'value 2' },\r
    { id: 3, label: 'item 3', value: 'value 3' },\r
    { id: 4, label: 'item 4', value: 'value 4' },\r
    { id: 5, label: 'item 5', value: 'value 5' },\r
    { id: 6, label: 'item 6', value: 'value 6' },\r
  ],\r
};\r
\r
// export const Secondary = Template.bind({});\r
// Secondary.args = {\r
//   label: "Menu",\r
// };\r
\r
// export const Large = Template.bind({});\r
// Large.args = {\r
//   size: "large",\r
//   label: "Menu",\r
// };\r
\r
// export const Small = Template.bind({});\r
// Small.args = {\r
//   size: "small",\r
//   label: "Menu",\r
// };\r
`,locationsMap:{primary:{startLoc:{col:46,line:17},endLoc:{col:74,line:17},startBody:{col:46,line:17},endBody:{col:74,line:17}}}}},title:"Example/Menu",component:b,argTypes:{backgroundColor:{control:"color"}}},P=m(r=>S.jsx(b,{...r}),"Template"),$=P.bind({});$.args={menuItems:[{id:1,label:"item 1",value:"value 1"},{id:2,label:"item 2",value:"value 2"},{id:3,label:"item 3",value:"value 3"},{id:4,label:"item 4",value:"value 4"},{id:5,label:"item 5",value:"value 5"},{id:6,label:"item 6",value:"value 6"}]};const A=["Primary"];export{$ as Primary,A as __namedExportsOrder,V as default};
//# sourceMappingURL=Menu.stories-ce08952e.js.map
