import{r as c,j as s,s as m,h as o,n as d}from"./index-794f9aea.js";import{L as x}from"./Layout-72990a19.js";import{h as f}from"./index-ace4a678.js";import{A as p}from"./AxiosINSTENCE-522b684b.js";import{C as j}from"./CustomTag-0fc836d4.js";import{P as g}from"./index.esm-4e1aee17.js";import{F as k}from"./index.esm-7f15bae3.js";import{G as A}from"./index.esm-0c616f23.js";import{T as N}from"./Table-0996f6f0.js";import{u as y}from"./useDispatch-41b5d20e.js";import"./colors-33d15d1a.js";import"./useCookies-e0d2a82b.js";import"./index-fb1deb60.js";import"./motion-d7c49335.js";import"./useFlexGapSupport-b7974bb9.js";import"./KeyCode-54d32f50.js";import"./Dropdown-659dd2fe.js";import"./index-df278d16.js";function O(){const[l,h]=c.useState([]),e=y(),i=async()=>{try{e(m());const a=await p.get("/api/admin/get-all-doctors",{token:document.cookie});e(o()),a.data.success&&h(a.data.data)}catch{e(o())}},r=async(a,t)=>{try{e(m());const n=await p.post("/api/admin/change-doctor-account-status",{token:document.cookie,doctorId:a._id,userId:a.userId,status:t},{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});e(o()),n.data.success&&(d.success(n.data.message),i())}catch{d.error("Error changing doctor account status"),e(o())}};c.useEffect(()=>{i()},[]);const u=[{title:"Name",dataIndex:"name",render:(a,t)=>s.jsxs("span",{children:[t.firstName," ",t.lastName]})},{title:"Phone",dataIndex:"phoneNumber",render:(a,t)=>s.jsxs("span",{style:{color:"#0087BA"},children:[s.jsx(g,{style:{fontSize:20}})," ",t==null?void 0:t.phoneNumber]})},{title:"Created At",dataIndex:"createdAt",render:a=>s.jsxs("span",{children:[s.jsx(k,{style:{fontSize:20,marginRight:8}}),f(a.createdAt).format("DD-MM-YYYY")]})},{title:"status",dataIndex:"status",render:(a,t)=>s.jsx("span",{children:s.jsx(j,{status:t==null?void 0:t.status})})},{title:"Actions",dataIndex:"actions",render:(a,t)=>s.jsxs("div",{className:"d-flex",children:[t.status==="pending"&&s.jsx("h1",{className:"anchor",onClick:()=>r(t,"approved"),children:"Approve"}),t.status==="approved"&&s.jsx("h1",{className:"anchor",onClick:()=>r(t,"blocked"),children:"Block"}),t.status==="blocked"&&s.jsx("h1",{className:"anchor",onClick:()=>r(t,"approved"),children:"Approve"})]})}];return s.jsxs(x,{children:[s.jsxs("h1",{style:{color:"#0087ba"},className:"page-header",children:[s.jsx(A,{})," Doctors List"]}),s.jsx("hr",{}),s.jsx(N,{columns:u,dataSource:l})]})}export{O as default};
