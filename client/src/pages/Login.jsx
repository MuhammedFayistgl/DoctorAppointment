import { Button, Form, Input } from "antd";
// import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import { AxiosConnection } from "../utils/AxiosINSTENCE";
import { useCookies } from "react-cookie";

function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// eslint-disable-next-line no-unused-vars
	const [cookies, setCookie, removeCookie] = useCookies("token");
	const onFinish = async (values) => {
		try {
			dispatch(showLoading());
			const response = await AxiosConnection.post("api/user/login",values );
			dispatch(hideLoading());
			if (response.data.success) {
				setCookie("token",response.data.data)
				toast.success(response.data.message);	
				navigate("/");
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			dispatch(hideLoading());
			toast.error("Something went wrong");
		}
	};

	return (
		<div className="authentication">
			<div className="authentication-form card p-3">
				<h1 className="card-title">Welcome Back</h1>
				<Form layout="vertical" onFinish={onFinish}>
					<Form.Item label="Email" name="email">
						<Input placeholder="Email" />
					</Form.Item>
					<Form.Item label="Password" name="password">
						<Input placeholder="Password" type="password" />
					</Form.Item>

					<Button className="primary-button my-2 full-width-button" htmlType="submit">
						LOGIN
					</Button>

					<Link to="/register" className="anchor mt-2">
						CLICK HERE TO REGISTER
					</Link>
				</Form>
			</div>
		</div>
	);
}

export default Login;
