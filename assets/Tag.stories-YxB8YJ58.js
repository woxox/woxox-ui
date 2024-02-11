import{j as o}from"./jsx-runtime-AgcCsxC8.js";import{D as t}from"./index-_exp-cod.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const j={title:"Example/Tag",component:t,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{children:"Tag"}},s={render:n=>o.jsx("div",{style:{display:"flex",gap:"10px"},children:["default","red","green","blue"].map(e=>o.jsx(t,{...n,color:e,children:e}))})},a={render:n=>o.jsx("div",{style:{display:"flex",gap:"10px"},children:["sm","md","lg"].map(e=>o.jsx(t,{...n,size:e,children:e}))})};var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Tag'
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,i,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '10px'
  }}>
      {(['default', 'red', 'green', 'blue'] as const).map(color => <Tag {...args} color={color}>
          {color}
        </Tag>)}
    </div>
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var g,u,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '10px'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <Tag {...args} size={size}>
          {size}
        </Tag>)}
    </div>
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const v=["Primary","Colors","Sizes"];export{s as Colors,r as Primary,a as Sizes,v as __namedExportsOrder,j as default};
