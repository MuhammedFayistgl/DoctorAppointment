import{b as c,u as f,r as d,j as g,N as m,s as l,h as i,c as h}from"./index-d61e6832.js";import{A as k}from"./AxiosINSTENCE-259bf89f.js";import{u as x}from"./useCookies-b7feecdd.js";import{u as p}from"./useDispatch-35ab4213.js";function N(o){const[e,v,a]=x(["token"]),{user:n}=c(t=>t.user),s=p(),r=f(),u=async()=>{try{s(l());const t=await k.post("api/user/get-user-info-by-id",{token:e==null?void 0:e.token});s(i()),t.data.success?s(h(t.data.data)):(a("token"),r("/login"))}catch{s(i()),a("token"),r("/login")}};return d.useEffect(()=>{n||u()},[n]),e!=null&&e.token?o==null?void 0:o.children:g.jsx(m,{to:"/login"})}export{N as default};