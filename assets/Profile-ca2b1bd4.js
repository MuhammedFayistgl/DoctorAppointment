import{p as x,B as D,r as c,m as k,l as y,k as r,s as n,A as m,n as a,t as e}from"./index-e5626ad4.js";import{L as j}from"./Layout-dc54756a.js";import{D as w}from"./DoctorForm-1a6dad0d.js";import{h as d}from"./index-eac0a217.js";import"./index-75eee657.js";import"./motion-086d0ddb.js";import"./index-6d9d09e7.js";import"./index-dc5347db.js";function N(){const{user:p}=x(o=>o.user),u=D(),[i,f]=c.useState(null),s=k(),g=y(),l=async o=>{try{s(n());const t=await m.post("/api/doctor/update-doctor-profile",{token:document.cookie,...o,userId:p._id,timings:[d(o.timings[0]).format("HH:mm"),d(o.timings[1]).format("HH:mm")]});s(a()),t.data.success?(e.success(t.data.message),g("/")):e.error(t.data.message)}catch{s(a()),e.error("Something went wrong")}},h=async()=>{try{s(n());const o=await m.post("/api/doctor/get-doctor-info-by-user-id",{userId:u.userId,token:document.cookie});s(a()),o.data.success&&f(o.data.data)}catch(o){console.log(o),s(a())}};return c.useEffect(()=>{h()},[]),r.jsxs(j,{children:[r.jsx("h1",{className:"page-title",children:"Doctor Profile"}),r.jsx("hr",{}),i&&r.jsx(w,{onFinish:l,initivalValues:i})]})}export{N as default};