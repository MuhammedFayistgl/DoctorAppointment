import{o as c,p as u,m as d,l as g,r as f,k as l,N as h,s as x,A as k,n as i,q as m}from"./index-7ac19991.js";function E(t){const[a,v,C]=c("token"),{user:o}=u(e=>e.user),s=d(),n=g(),r=async()=>{try{s(x());const e=await k.post("/api/user/get-user-info-by-id");s(i()),e.data.success?s(m(e.data.data)):n("/login")}catch{s(i()),n("/login")}};return f.useEffect(()=>{o||r()},[o]),a!=null&&a.token?t==null?void 0:t.children:l.jsx(h,{to:"/login"})}export{E as default};
