import{j as r}from"./jsx-runtime-AgcCsxC8.js";import{r as s}from"./index-XiNr8FW2.js";import"./tag.css-FrPudy4B.js";import"./_commonjsHelpers-5-cIlDoe.js";var d="theme_baseTokenClass__okm90v0",t="theme_darkThemeClass__okm90v5v",h="theme_lightThemeClass__okm90v5w";const _={parameters:{class:t,actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}},f=[(o,c)=>{const[m,n]=s.useState(window.matchMedia("(prefers-color-scheme: dark)").matches??!1);return s.useEffect(()=>{const e=i=>n(i.matches),a=window.matchMedia("(prefers-color-scheme: dark)");return a.addEventListener("change",e),()=>a.removeEventListener("change",e)},[]),r.jsx("div",{className:`${m?t:h} ${d}`,children:r.jsx(o,{...c})})}];export{f as decorators,_ as default};
