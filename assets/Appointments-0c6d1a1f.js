import{r as a,j as e,s as c,h as n}from"./index-794f9aea.js";import{L as l}from"./Layout-72990a19.js";import{h as i}from"./index-ace4a678.js";import{A as x}from"./AxiosINSTENCE-522b684b.js";import{C as u}from"./CustomTag-0fc836d4.js";import{P as f}from"./index.esm-4e1aee17.js";import{T as h}from"./Table-0996f6f0.js";import{u as j}from"./useDispatch-41b5d20e.js";import"./colors-33d15d1a.js";import"./useCookies-e0d2a82b.js";import"./index-fb1deb60.js";import"./motion-d7c49335.js";import"./useFlexGapSupport-b7974bb9.js";import"./KeyCode-54d32f50.js";import"./Dropdown-659dd2fe.js";import"./index-df278d16.js";function H(){const[r,m]=a.useState([]),o=j(),p=async()=>{try{o(c());const s=await x.get("/api/user/get-appointments-by-user-id",{token:document.cookie});o(n()),s.data.success&&m(s.data.data)}catch{o(n())}},d=[{title:"Id",dataIndex:"_id"},{title:"Doctor",dataIndex:"name",render:(s,t)=>e.jsxs("span",{children:[t.doctorInfo.firstName," ",t.doctorInfo.lastName]})},{title:"Phone",dataIndex:"phoneNumber",render:(s,t)=>e.jsxs("span",{style:{color:"#0087BA"},children:[e.jsx(f,{style:{fontSize:20}})," ",t.doctorInfo.phoneNumber]})},{title:"Date & Time",dataIndex:"createdAt",render:(s,t)=>e.jsxs("span",{children:[i(t.date).format("DD-MM-YYYY")," ",i(t.time).format("HH:mm")]})},{title:"Status",dataIndex:"status",render:(s,t)=>e.jsx(u,{status:t==null?void 0:t.status})}];return a.useEffect(()=>{p()},[]),e.jsxs(l,{children:[e.jsx("h1",{className:"page-title",children:"Appointments"}),e.jsx("hr",{}),e.jsx(h,{columns:d,dataSource:r})]})}export{H as default};
