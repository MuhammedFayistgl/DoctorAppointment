/* eslint-disable react/prop-types */
// import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { AxiosConnection } from "../utils/AxiosINSTENCE";
import { useCookies } from "react-cookie";
function ProtectedRoute(props) {
	// eslint-disable-next-line no-unused-vars
	const [cookies, setCookie, removeCookie] = useCookies("token");

	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const getUser = async () => {
		try {
			dispatch(showLoading());
			const response = await AxiosConnection.post(
				"/api/user/get-user-info-by-id",
				// { token: cookies?.token }
				// {
				//   headers: {
				//     Authorization: `Bearer ${localStorage.getItem("token")}`,
				//   },
				// }
			
			);
			dispatch(hideLoading());
			if (response.data.success) {
				dispatch(setUser(response.data.data));
			} else {
				// removeCookie("token");
				navigate("/login");
			}
		} catch (error) {
			
			dispatch(hideLoading());
			// removeCookie("token");
			// navigate("/login");
		}
	};

	useEffect(() => {
		if (!user) {
			getUser();
		}
	}, [user]);

	if (cookies?.token) {
		return props?.children;
	} else {
		return <Navigate to="/login" />;
	}
}

export default ProtectedRoute;
