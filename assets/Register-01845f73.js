import{u as l,j as s,L as d,s as p,h as i,_ as o}from"./index-794f9aea.js";import{A as h}from"./AxiosINSTENCE-522b684b.js";import{F as a}from"./index-fbac24bb.js";import{I as r}from"./index-df278d16.js";import{B as u}from"./useFlexGapSupport-b7974bb9.js";import{u as x}from"./useDispatch-41b5d20e.js";import"./colors-33d15d1a.js";import"./index-fb1deb60.js";import"./motion-d7c49335.js";import"./row-c2fa93d1.js";function v(){const t=x(),n=l(),m=async c=>{try{t(p());const e=await h.post("/api/user/register",{token:document.cookie,values:c});t(i()),e.data.success?(o.success(e.data.message),n("/login")):o.error(e.data.message)}catch{t(i()),o.error("Something went wrong")}};return s.jsx("div",{className:"authentication",children:s.jsxs("div",{className:"authentication-form card p-3",children:[s.jsx("h1",{className:"card-title",children:"Nice To Meet U"}),s.jsxs(a,{layout:"vertical",onFinish:m,children:[s.jsx(a.Item,{label:"Name",name:"name",children:s.jsx(r,{placeholder:"Name"})}),s.jsx(a.Item,{label:"Email",name:"email",children:s.jsx(r,{placeholder:"Email"})}),s.jsx(a.Item,{label:"Password",name:"password",children:s.jsx(r,{placeholder:"Password",type:"password"})}),s.jsx(u,{className:"primary-button my-2 full-width-button",htmlType:"submit",children:"REGISTER"}),s.jsx(d,{to:"/login",className:"anchor mt-2",children:"CLICK HERE TO LOGIN"})]})]})})}export{v as default};
