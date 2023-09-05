import{r,u as v,b as I,g as C,j as s,s as m,h as a,n as i}from"./index-6064bde3.js";import{L as A}from"./Layout-6525ac6e.js";import{h as f}from"./index-8bda1c3b.js";import{A as l}from"./AxiosINSTENCE-fd2741d1.js";import{R as Y,C as x}from"./row-f75e0b9b.js";import{D as E,T as P}from"./index-06bd6f66.js";import{B as b}from"./useFlexGapSupport-9fb7f7fe.js";import{u as S}from"./useDispatch-bb8a135c.js";import"./colors-2961a70e.js";import"./useCookies-8973618f.js";import"./index-ac68f9cb.js";import"./KeyCode-a9cb45b4.js";function G(){const[d,n]=r.useState(!1),g=v(),[p,j]=r.useState(),[h,k]=r.useState(),{user:u}=I(t=>t.user),[e,N]=r.useState(null),c=C(),o=S(),y=async()=>{try{o(m());const t=await l.post("/api/doctor/get-doctor-info-by-id",{doctorId:c.doctorId});o(a()),t.data.success&&N(t.data.data)}catch(t){console.log(t),o(a())}},w=async()=>{try{o(m());const t=await l.post("/api/user/check-booking-avilability",{doctorId:c.doctorId,date:p,time:h});o(a()),t.data.success?(i.success(t.data.message),n(!0)):i.error(t.data.message)}catch{i.error("Error booking appointment"),o(a())}},D=async()=>{n(!1);try{o(m());const t=await l.post("/api/user/book-appointment",{doctorId:c.doctorId,userId:u._id,doctorInfo:e,userInfo:u,date:p,time:h});o(a()),t.data.success&&(i.success(t.data.message),g("/appointments"))}catch{i.error("Error booking appointment"),o(a())}};return r.useEffect(()=>{y()},[]),s.jsx(A,{children:e&&s.jsxs("div",{children:[s.jsxs("h1",{className:"page-title",children:[e.firstName," ",e.lastName]}),s.jsx("hr",{}),s.jsxs(Y,{gutter:20,className:"mt-5",align:"middle",children:[s.jsx(x,{span:8,sm:24,xs:24,lg:8,children:s.jsx("img",{src:"https://thumbs.dreamstime.com/b/finger-press-book-now-button-booking-reservation-icon-online-149789867.jpg",alt:"",width:"100%",height:"400"})}),s.jsxs(x,{span:8,sm:24,xs:24,lg:8,children:[s.jsxs("h1",{className:"normal-text",children:[s.jsx("b",{children:"Timings :"})," ",e.timings[0]," - ",e.timings[1]]}),s.jsxs("p",{children:[s.jsx("b",{children:"Phone Number : "}),e.phoneNumber]}),s.jsxs("p",{children:[s.jsx("b",{children:"Address : "}),e.address]}),s.jsxs("p",{children:[s.jsx("b",{children:"Fee per Visit : "}),e.feePerCunsultation]}),s.jsxs("p",{children:[s.jsx("b",{children:"Website : "}),e.website]}),s.jsxs("div",{className:"d-flex flex-column pt-2 mt-2",children:[s.jsx(E,{format:"DD-MM-YYYY",onChange:t=>{j(f(t).format("DD-MM-YYYY")),n(!1)}}),s.jsx(P,{format:"HH:mm",className:"mt-3",onChange:t=>{n(!1),k(f(t).format("HH:mm"))}}),!d&&s.jsx(b,{className:"primary-button mt-3 full-width-button",onClick:w,children:"Check Availability"}),d&&s.jsx(b,{className:"primary-button mt-3 full-width-button",onClick:D,children:"Book Now"})]})]})]})]})})}export{G as default};
