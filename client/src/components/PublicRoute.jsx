/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

function PublicRoute(props) {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  if (cookies?.token) {
    return <Navigate to="/" />;
  } else {
    return props.children;
  }
}

export default PublicRoute;
