import{u as d,j as s,L as p,s as h,h as r,_ as o}from"./index-794f9aea.js";import{A as u}from"./AxiosINSTENCE-522b684b.js";import{u as x}from"./useCookies-e0d2a82b.js";import{F as t}from"./index-fbac24bb.js";import{I as i}from"./index-df278d16.js";import{B as f}from"./useFlexGapSupport-b7974bb9.js";import{u as j}from"./useDispatch-41b5d20e.js";import"./colors-33d15d1a.js";import"./index-fb1deb60.js";import"./motion-d7c49335.js";import"./row-c2fa93d1.js";function F(){const e=j(),n=d(),[g,m,w]=x("token"),c=async l=>{try{e(h());const a=await u.post("api/user/login",l);e(r()),a.data.success?(m("token",a.data.data),o.success(a.data.message),n("/")):o.error(a.data.message)}catch{e(r()),o.error("Something went wrong")}};return s.jsx("div",{className:"authentication",children:s.jsxs("div",{className:"authentication-form card p-3",children:[s.jsx("h1",{className:"card-title",children:"Welcome Back"}),s.jsxs(t,{layout:"vertical",onFinish:c,children:[s.jsx(t.Item,{label:"Email",name:"email",children:s.jsx(i,{placeholder:"Email"})}),s.jsx(t.Item,{label:"Password",name:"password",children:s.jsx(i,{placeholder:"Password",type:"password"})}),s.jsx(f,{className:"primary-button my-2 full-width-button",htmlType:"submit",children:"LOGIN"}),s.jsx(p,{to:"/register",className:"anchor mt-2",children:"CLICK HERE TO REGISTER"})]})]})})}export{F as default};
