var w=Object.defineProperty;var c=(o,e)=>w(o,"name",{value:e,configurable:!0});import{v as t,s as C,c as S,a as d,b as M,j as r}from"./Skeleton-58bd7688.js";import{r as i}from"./index-66afdacb.js";import{d as B}from"./index-52ccee22.js";import"./iframe-7ccdceb7.js";var R={name:"bjn8wh",styles:"position:relative"},z={name:"n6k2tj",styles:"position:relative;top:-1px;z-index:10;height:1px;--tw-bg-opacity:1;background-color:rgb(163 163 163 / var(--tw-bg-opacity))"},E={name:"zjik7",styles:"display:flex"},v=c(function(o){var e=o.tabs,l=o.fallback,p=l===void 0?t("span",null,"not selected"):l,b=o.underline,a=b===void 0||b,m=o.cursorSweep,u=m===void 0||m,f=i.useContext(C).textColor,T=i.useState(),y=S(T,2),n=y[0],h=y[1],j=i.useMemo(function(){return e.map(function(g,x){var s=n===x;return t("div",{css:R,onClick:function(){return h(x)},key:g.title},t("div",{css:["padding-left:1rem;padding-right:1rem;padding-top:0.375rem;padding-bottom:0.375rem;cursor:pointer;user-select:none;",a&&{borderBottomWidth:"1px","--tw-border-opacity":"1",borderBottomColor:"rgb(82 82 82 / var(--tw-border-opacity))"},"","","",""]},g.title),s&&u&&t(d.div,{css:["position:absolute;top:0px;left:0px;bottom:0px;right:0px;z-index:-10;border-radius:0.375rem;",a&&{borderBottomRightRadius:"0px",borderBottomLeftRadius:"0px"},s&&{"--tw-bg-opacity":"1",backgroundColor:"rgb(64 64 64 / var(--tw-bg-opacity))"},"","","",""],transition:{type:"spring",damping:25,stiffness:400},layoutId:"cursor"}),s&&a&&t(d.div,{css:z,layoutId:"underline"}))})},[u,n,e,a]),k=i.useMemo(function(){return n!==void 0&&e[n]?e[n].content:p},[p,n,e]);return t("div",{css:[M("color:",f,";","",""),"","","",""]},t("div",{css:E},j),t(B,{mode:"wait"},t(d.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.1},key:n??"empty"},k)))},"i");const N={parameters:{storySource:{source:`import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tab } from '@woxox/ui';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Tab',
  component: Tab,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tab>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  tabs: [
    { title: '1 tab', content: <div>1 tab content</div> },
    { title: '2 tab', content: <div>2 tab content</div> },
    { title: '3 tab', content: <div>3 tab content</div> },
    { title: '4 tab', content: <div>4 tab content</div> },
    { title: '5 tab', content: <div>5 tab content</div> },
  ],
  underline: true,
  cursorSweep: true,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Tab",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Tab",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Tab",
// };
`,locationsMap:{primary:{startLoc:{col:45,line:17},endLoc:{col:72,line:17},startBody:{col:45,line:17},endBody:{col:72,line:17}}}}},title:"Example/Tab",component:v,argTypes:{backgroundColor:{control:"color"}}},L=c(o=>r.jsx(v,{...o}),"Template"),P=L.bind({});P.args={tabs:[{title:"1 tab",content:r.jsx("div",{children:"1 tab content"})},{title:"2 tab",content:r.jsx("div",{children:"2 tab content"})},{title:"3 tab",content:r.jsx("div",{children:"3 tab content"})},{title:"4 tab",content:r.jsx("div",{children:"4 tab content"})},{title:"5 tab",content:r.jsx("div",{children:"5 tab content"})}],underline:!0,cursorSweep:!0};const O=["Primary"];export{P as Primary,O as __namedExportsOrder,N as default};
//# sourceMappingURL=Tab.stories-12fd5840.js.map
