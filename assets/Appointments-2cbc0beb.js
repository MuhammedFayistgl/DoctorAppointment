import{r as o,j as s,s as c,h as n}from"./index-c9c21ab8.js";import{L as l}from"./Layout-968b5c28.js";import{h as i}from"./index-bffafe8f.js";import{A as x}from"./AxiosINSTENCE-d15dedac.js";import{C as u}from"./CustomTag-9749db9b.js";import{P as f}from"./index.esm-b77fac21.js";import{T as h}from"./Table-92fed7a9.js";import{u as j}from"./useDispatch-74baf5fc.js";import"./colors-f07a94b8.js";import"./useCookies-2a2c0bbb.js";import"./index-52cb831a.js";import"./motion-e250690d.js";import"./useFlexGapSupport-8aecea8b.js";import"./KeyCode-19ea1d43.js";import"./Dropdown-1bbb24b0.js";import"./index-ba507570.js";function M(){const[r,m]=o.useState([]),a=j(),p=async()=>{try{a(c());const e=await x.get("/api/user/get-appointments-by-user-id");a(n()),e.data.success&&m(e.data.data)}catch{a(n())}},d=[{title:"Id",dataIndex:"_id"},{title:"Doctor",dataIndex:"name",render:(e,t)=>s.jsxs("span",{children:[t.doctorInfo.firstName," ",t.doctorInfo.lastName]})},{title:"Phone",dataIndex:"phoneNumber",render:(e,t)=>s.jsxs("span",{style:{color:"#0087BA"},children:[s.jsx(f,{style:{fontSize:20}})," ",t.doctorInfo.phoneNumber]})},{title:"Date & Time",dataIndex:"createdAt",render:(e,t)=>s.jsxs("span",{children:[i(t.date).format("DD-MM-YYYY")," ",i(t.time).format("HH:mm")]})},{title:"Status",dataIndex:"status",render:(e,t)=>s.jsx(u,{status:t==null?void 0:t.status})}];return o.useEffect(()=>{p()},[]),s.jsxs(l,{children:[s.jsx("h1",{className:"page-title",children:"Appointments"}),s.jsx("hr",{}),s.jsx(h,{columns:d,dataSource:r})]})}export{M as default};
