import{b as c,u as h,j as s,s as u,h as a,n as i}from"./index-fbe38c32.js";import{L as d}from"./Layout-77a5e166.js";import{D as f}from"./DoctorForm-676bbeb2.js";import{h as m}from"./index-a2b73ab4.js";import{A as g}from"./AxiosINSTENCE-73d1f499.js";import{G as x}from"./index.esm-5a63b724.js";import{u as l}from"./useDispatch-28f3209b.js";import"./colors-df722fa9.js";import"./useCookies-98b20210.js";import"./index-f3cda380.js";import"./useFlexGapSupport-0ff29005.js";import"./index-758b94df.js";import"./motion-b94a2635.js";import"./row-7be28616.js";import"./index-54a6524c.js";import"./index-1064d3d0.js";import"./KeyCode-26387bea.js";import"./iconBase-2bff9c31.js";function q(){const r=l(),{user:e}=c(o=>o.user),p=h(),n=async o=>{try{r(u());const t=await g.post("/api/user/apply-doctor-account",{...o,userId:e._id,timings:[m(o.timings[0]).format("HH:mm"),m(o.timings[1]).format("HH:mm")]});r(a()),t.data.success?(i.success(t.data.message),p("/")):i.error(t.data.message)}catch{r(a()),i.error("Something went wrong")}};return s.jsxs(d,{children:[s.jsxs("h1",{className:"page-title",children:[" ",s.jsx(x,{})," Apply Doctor"]}),s.jsx("hr",{}),s.jsx(f,{onFinish:n})]})}export{q as default};
