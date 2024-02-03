import{j as s}from"./jsx-runtime-AgcCsxC8.js";import{t as z,r as j,b as T}from"./tag.css-FrPudy4B.js";import"./index-XiNr8FW2.js";import{e as S}from"./clsx-khdrbEnD.js";import"./_commonjsHelpers-5-cIlDoe.js";var t=function(r){var e=r.color,f=r.size,y=r.className,h=r.children,v=z(r,["color","size","className","children"]);return s.jsx("div",j({className:S(T({color:e,size:f}),y)},v,{children:h}))};const _={title:"Example/Tag",component:t,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{children:"Tag"}},o={render:r=>s.jsx("div",{style:{display:"flex",gap:"10px"},children:["default","red","green","blue"].map(e=>s.jsx(t,{...r,color:e,children:e}))})},n={render:r=>s.jsx("div",{style:{display:"flex",gap:"10px"},children:["sm","md","lg"].map(e=>s.jsx(t,{...r,size:e,children:e}))})};var c,d,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Tag'
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,m,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '10px'
  }}>
      {(['default', 'red', 'green', 'blue'] as const).map(color => <Tag {...args} color={color}>
          {color}
        </Tag>)}
    </div>
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,u,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '10px'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <Tag {...args} size={size}>
          {size}
        </Tag>)}
    </div>
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const $=["Primary","Colors","Sizes"];export{o as Colors,a as Primary,n as Sizes,$ as __namedExportsOrder,_ as default};
