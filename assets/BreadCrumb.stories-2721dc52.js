var f=Object.defineProperty;var s=(e,t)=>f(e,"name",{value:t,configurable:!0});import{j as m,n as y,s as x,o as w,v as p,b as h,t as j}from"./Skeleton-908d139e.js";import{r as u,R as k}from"./index-6edbd2da.js";import"./iframe-8489ce6c.js";function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}s(v,"r");var O=s(function(e){return m.jsx("svg",function(t,r){return r=r??{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):function(o,a){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(o);n.push.apply(n,l)}return n}(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))}),t}(function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{},a=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(o).filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),a.forEach(function(n){v(t,n,o[n])})}return t}({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22"},e),{children:m.jsx("path",{d:"m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373",transform:"matrix(.03541-.00013.00013.03541 2.98 3.02)",fill:"inherit"})}))},"t"),C=["paths","onClick"],P={name:"a17ywk",styles:"display:flex;overflow:hidden;padding:0.75rem;font-size:0.75rem;line-height:1rem"},B={name:"12knk90",styles:"flex-shrink:0;width:0.75rem;margin-left:0.125rem;margin-right:0.125rem;margin-top:auto;margin-bottom:auto;fill:#71717a;@media (prefers-color-scheme: dark){fill:#a1a1aa;}"},d=s(function(e){var t=e.paths,r=e.onClick,o=y(e,C),a=u.useContext(x).textColor,n=u.useCallback(function(l){if(r){var i=w(t.slice(0,l+1).flatMap(function(c){var g=c.label,b=c.name;return b??g}).join("/"));r(i)}},[r,t]);return p("div",j({css:P},o),t.map(function(l,i,c){return p(k.Fragment,{key:l.label},p("span",{css:["display:block;padding-left:0.375rem;padding-right:0.375rem;padding-top:0.25rem;padding-bottom:0.25rem;border-radius:0.25rem;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;:hover{--tw-bg-opacity:1;background-color:rgb(82 82 91 / var(--tw-bg-opacity));}:hover{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;",h("color:",a,";","",""),"","","",""],onClick:function(){return n(i)}},l.label),c[i+1]&&p(O,{css:B}))}))},"m");const D={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BreadCrumb } from "@woxox/ui";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/BreadCrumb",
  component: BreadCrumb,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BreadCrumb>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BreadCrumb> = (args) => (
  <BreadCrumb {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  paths: [
    { label: "1st label" },
    { label: "2st label" },
    { label: "3st label" },
  ],
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
`,locationsMap:{primary:{startLoc:{col:52,line:16},endLoc:{col:1,line:18},startBody:{col:52,line:16},endBody:{col:1,line:18}}}}},title:"Example/BreadCrumb",component:d,argTypes:{backgroundColor:{control:"color"}}},S=s(e=>m.jsx(d,{...e}),"Template"),T=S.bind({});T.args={paths:[{label:"1st label"},{label:"2st label"},{label:"3st label"}]};const L=["Primary"];export{T as Primary,L as __namedExportsOrder,D as default};
//# sourceMappingURL=BreadCrumb.stories-2721dc52.js.map
