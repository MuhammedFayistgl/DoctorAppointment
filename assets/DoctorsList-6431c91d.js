import{r as c,m as x,k as s,s as d,A as l,n as o,t as m}from"./index-e5626ad4.js";import{L as f}from"./Layout-dc54756a.js";import{h as g}from"./index-eac0a217.js";import{P as j,C as k}from"./CustomTag-c3ebe9a4.js";import{F as A}from"./index.esm-f2d728a5.js";import{G as N}from"./index.esm-31e70b0f.js";import{T as y}from"./Table-51f96082.js";import"./index-75eee657.js";import"./motion-086d0ddb.js";import"./Dropdown-bb15e528.js";import"./index-dc5347db.js";function z(){const[p,h]=c.useState([]),e=x(),i=async()=>{try{e(d());const a=await l.get("/api/admin/get-all-doctors",{token:document.cookie});e(o()),a.data.success&&h(a.data.data)}catch{e(o())}},n=async(a,t)=>{try{e(d());const r=await l.post("/api/admin/change-doctor-account-status",{token:document.cookie,doctorId:a._id,userId:a.userId,status:t},{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});e(o()),r.data.success&&(m.success(r.data.message),i())}catch{m.error("Error changing doctor account status"),e(o())}};c.useEffect(()=>{i()},[]);const u=[{title:"Name",dataIndex:"name",render:(a,t)=>s.jsxs("span",{children:[t.firstName," ",t.lastName]})},{title:"Phone",dataIndex:"phoneNumber",render:(a,t)=>s.jsxs("span",{style:{color:"#0087BA"},children:[s.jsx(j,{style:{fontSize:20}})," ",t==null?void 0:t.phoneNumber]})},{title:"Created At",dataIndex:"createdAt",render:a=>s.jsxs("span",{children:[s.jsx(A,{style:{fontSize:20,marginRight:8}}),g(a.createdAt).format("DD-MM-YYYY")]})},{title:"status",dataIndex:"status",render:(a,t)=>s.jsx("span",{children:s.jsx(k,{status:t==null?void 0:t.status})})},{title:"Actions",dataIndex:"actions",render:(a,t)=>s.jsxs("div",{className:"d-flex",children:[t.status==="pending"&&s.jsx("h1",{className:"anchor",onClick:()=>n(t,"approved"),children:"Approve"}),t.status==="approved"&&s.jsx("h1",{className:"anchor",onClick:()=>n(t,"blocked"),children:"Block"}),t.status==="blocked"&&s.jsx("h1",{className:"anchor",onClick:()=>n(t,"approved"),children:"Approve"})]})}];return s.jsxs(f,{children:[s.jsxs("h1",{style:{color:"#0087ba"},className:"page-header",children:[s.jsx(N,{})," Doctors List"]}),s.jsx("hr",{}),s.jsx(y,{columns:u,dataSource:p})]})}export{z as default};