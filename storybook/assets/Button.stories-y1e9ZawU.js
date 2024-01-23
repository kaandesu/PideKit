import{d as x,e as s,o as P,f as E,t as L,n as h,g as K}from"./vue.esm-bundler-Rjo8Unkv.js";const k=x({__name:"Button",props:{label:{},primary:{type:Boolean,default:!1},size:{},backgroundColor:{}},emits:["click"],setup(B,{emit:z}){const e=B,S=z,C=s(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),_=s(()=>({backgroundColor:e.backgroundColor})),v=()=>{S("click",1)};return(q,N)=>(P(),E("button",{type:"button",class:h(C.value),onClick:v,style:K(_.value)},L(q.label),7))}});k.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"primary",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]}},{name:"backgroundColor",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["number"]}}],sourceFiles:["/home/runner/work/PideKit/PideKit/src/pidekitLibrary/components/Button/Button.vue"]};const D={title:"Example/Button",component:k,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},backgroundColor:{control:"color"},onClick:{action:"clicked"}},args:{primary:!1}},a={args:{primary:!0,label:"Button"}},r={args:{primary:!1,label:"Button"}},o={args:{label:"Button",size:"large"}},t={args:{label:"Button",size:"small"}};var n,l,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,i,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    primary: false,
    label: 'Button'
  }
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,d,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'large'
  }
}`,...(y=(d=o.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var g,b,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'small'
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const F=["Primary","Secondary","Large","Small"];export{o as Large,a as Primary,r as Secondary,t as Small,F as __namedExportsOrder,D as default};
//# sourceMappingURL=Button.stories-y1e9ZawU.js.map
