import{r as o,j as s,s as c,h as n}from"./index-c35d94b9.js";import{L as l}from"./Layout-1ad5e6a5.js";import{h as i}from"./index-4ce07727.js";import{A as x}from"./AxiosINSTENCE-71de8c8b.js";import{C as u}from"./CustomTag-a8a76258.js";import{P as f}from"./index.esm-d07b94be.js";import{T as h}from"./Table-6b745d6d.js";import{u as j}from"./useDispatch-5949b431.js";import"./colors-82a61e49.js";import"./useCookies-7b991fe5.js";import"./iconBase-97b7da77.js";import"./index-ebc4a300.js";import"./motion-8a43c01c.js";import"./useFlexGapSupport-738625d0.js";import"./KeyCode-bfbad64a.js";import"./Dropdown-e8d17faf.js";import"./index-52933fbb.js";function k(){const[r,m]=o.useState([]),a=j(),p=async()=>{try{a(c());const e=await x.get("/api/user/get-appointments-by-user-id");a(n()),e.data.success&&m(e.data.data)}catch{a(n())}},d=[{title:"Id",dataIndex:"_id"},{title:"Doctor",dataIndex:"name",render:(e,t)=>s.jsxs("span",{children:[t.doctorInfo.firstName," ",t.doctorInfo.lastName]})},{title:"Phone",dataIndex:"phoneNumber",render:(e,t)=>s.jsxs("span",{style:{color:"#0087BA"},children:[s.jsx(f,{style:{fontSize:20}})," ",t.doctorInfo.phoneNumber]})},{title:"Date & Time",dataIndex:"createdAt",render:(e,t)=>s.jsxs("span",{children:[i(t.date).format("DD-MM-YYYY")," ",i(t.time).format("HH:mm")]})},{title:"Status",dataIndex:"status",render:(e,t)=>s.jsx(u,{status:t==null?void 0:t.status})}];return o.useEffect(()=>{p()},[]),s.jsxs(l,{children:[s.jsx("h1",{className:"page-title",children:"Appointments"}),s.jsx("hr",{}),s.jsx(h,{columns:d,dataSource:r})]})}export{k as default};
