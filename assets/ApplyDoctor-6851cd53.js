import{b as c,u as h,j as s,s as u,h as a,n as i}from"./index-c35d94b9.js";import{L as d}from"./Layout-1ad5e6a5.js";import{D as f}from"./DoctorForm-6f292c53.js";import{h as m}from"./index-4ce07727.js";import{A as g}from"./AxiosINSTENCE-71de8c8b.js";import{G as x}from"./index.esm-1f1a6e95.js";import{u as l}from"./useDispatch-5949b431.js";import"./colors-82a61e49.js";import"./useCookies-7b991fe5.js";import"./index-9652eabb.js";import"./useFlexGapSupport-738625d0.js";import"./index-ebc4a300.js";import"./motion-8a43c01c.js";import"./row-f2c9ab91.js";import"./index-52933fbb.js";import"./index-6fa58f4e.js";import"./KeyCode-bfbad64a.js";import"./iconBase-97b7da77.js";function q(){const r=l(),{user:e}=c(o=>o.user),p=h(),n=async o=>{try{r(u());const t=await g.post("/api/user/apply-doctor-account",{...o,userId:e._id,timings:[m(o.timings[0]).format("HH:mm"),m(o.timings[1]).format("HH:mm")]});r(a()),t.data.success?(i.success(t.data.message),p("/")):i.error(t.data.message)}catch{r(a()),i.error("Something went wrong")}};return s.jsxs(d,{children:[s.jsxs("h1",{className:"page-title",children:[" ",s.jsx(x,{})," Apply Doctor"]}),s.jsx("hr",{}),s.jsx(f,{onFinish:n})]})}export{q as default};
