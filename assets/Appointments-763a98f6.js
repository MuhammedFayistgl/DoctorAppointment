import{r as o,j as s,s as c,h as n}from"./index-d61e6832.js";import{L as l}from"./Layout-8cc01c4c.js";import{h as i}from"./index-525d17e6.js";import{A as x}from"./AxiosINSTENCE-259bf89f.js";import{C as u}from"./CustomTag-c089cb76.js";import{P as f}from"./index.esm-f665fe94.js";import{T as h}from"./Table-1a85f8e2.js";import{u as j}from"./useDispatch-35ab4213.js";import"./colors-68150b75.js";import"./useCookies-b7feecdd.js";import"./iconBase-8374cb34.js";import"./index-2e799419.js";import"./motion-1ba6ad94.js";import"./useFlexGapSupport-1815eb87.js";import"./KeyCode-6bf1bcce.js";import"./Dropdown-650ef115.js";import"./index-afad64bd.js";function k(){const[r,m]=o.useState([]),a=j(),p=async()=>{try{a(c());const e=await x.get("/api/user/get-appointments-by-user-id");a(n()),e.data.success&&m(e.data.data)}catch{a(n())}},d=[{title:"Id",dataIndex:"_id"},{title:"Doctor",dataIndex:"name",render:(e,t)=>s.jsxs("span",{children:[t.doctorInfo.firstName," ",t.doctorInfo.lastName]})},{title:"Phone",dataIndex:"phoneNumber",render:(e,t)=>s.jsxs("span",{style:{color:"#0087BA"},children:[s.jsx(f,{style:{fontSize:20}})," ",t.doctorInfo.phoneNumber]})},{title:"Date & Time",dataIndex:"createdAt",render:(e,t)=>s.jsxs("span",{children:[i(t.date).format("DD-MM-YYYY")," ",i(t.time).format("HH:mm")]})},{title:"Status",dataIndex:"status",render:(e,t)=>s.jsx(u,{status:t==null?void 0:t.status})}];return o.useEffect(()=>{p()},[]),s.jsxs(l,{children:[s.jsx("h1",{className:"page-title",children:"Appointments"}),s.jsx("hr",{}),s.jsx(h,{columns:d,dataSource:r})]})}export{k as default};