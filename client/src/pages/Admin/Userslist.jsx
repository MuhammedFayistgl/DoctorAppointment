/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import { Table } from "antd";
import moment from "moment";
import { AxiosConnection } from "../../utils/AxiosINSTENCE";
import { MdMarkEmailUnread } from "react-icons/md";
import { FcOvertime } from "react-icons/fc";
import { GiStethoscope } from "react-icons/gi";
import { GrUserAdmin } from "react-icons/gr";
import { BsFillHeartPulseFill } from "react-icons/bs";

function Userslist() {
	const [users, setUsers] = useState([]);
	const dispatch = useDispatch();
	const getUsersData = async () => {
		try {
			dispatch(showLoading());
			const resposne = await AxiosConnection.get("/api/admin/get-all-users",{token:document.cookie,});
			dispatch(hideLoading());
			if (resposne.data.success) {
				setUsers(resposne.data.data);
			}
		} catch (error) {
			dispatch(hideLoading());
		}
	};

	useEffect(() => {
		getUsersData();
	}, []);

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
		},
		{
			title: "Role",
			render: (record, text) => (
				<span>
					{record?.isAdmin ? (
						<GrUserAdmin style={{ fontSize: 20, color: "green" }} />
					) : record?.isDoctor ? (
						<GiStethoscope />
					) : (
						<BsFillHeartPulseFill style={{ fontSize: 20, color: "deeppink" }} />
					)}
				</span>
			),
		},
		{
			title: "Email",
			dataIndex: "email",
			render: (record, text) => (
				<span>
					<MdMarkEmailUnread style={{ fontSize: 20, marginRight: 8, color: "#4caf50" }} />
					{text.email}
				</span>
			),
		},
		{
			title: "Created At",
			dataIndex: "createdAt",
			render: (record, text) => (
				<span>
					<FcOvertime style={{ fontSize: 20, marginRight: 8 }} />
					{moment(record.createdAt).format("DD-MM-YYYY")}
				</span>
			),
		},
		{
			title: "Actions",
			dataIndex: "actions",
			render: (text, record) => (
				<div className="d-flex">
					<h1 className="anchor">Block</h1>
				</div>
			),
		},
	];

	return (
		<Layout>
			<h1 className="page-header">Users List</h1>
			<hr />
			<Table columns={columns} dataSource={users} />
		</Layout>
	);
}

export default Userslist;
