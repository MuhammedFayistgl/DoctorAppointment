import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import { toast } from "react-hot-toast";
import { Table } from "antd";
import moment from "moment";
import { AxiosConnection } from "../../utils/AxiosINSTENCE";
import { CustomTag } from "../../components/CustomTag";
import { PiPhoneCallFill } from "react-icons/pi";
import { FcOvertime } from "react-icons/fc";
import { GiStethoscope } from "react-icons/gi";

function DoctorsList() {
	const [doctors, setDoctors] = useState([]);
	const dispatch = useDispatch();
	const getDoctorsData = async () => {
		try {
			dispatch(showLoading());
			const resposne = await AxiosConnection.get("/api/admin/get-all-doctors",{token:document.cookie,});
			dispatch(hideLoading());
			if (resposne.data.success) {
				setDoctors(resposne.data.data);
			}
		} catch (error) {
			dispatch(hideLoading());
		}
	};

	const changeDoctorStatus = async (record, status) => {
		try {
			dispatch(showLoading());
			const resposne = await AxiosConnection.post(
				"/api/admin/change-doctor-account-status",
				{token:document.cookie, doctorId: record._id, userId: record.userId, status: status },
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				}
			);
			dispatch(hideLoading());
			if (resposne.data.success) {
				toast.success(resposne.data.message);
				getDoctorsData();
			}
		} catch (error) {
			toast.error("Error changing doctor account status");
			dispatch(hideLoading());
		}
	};
	useEffect(() => {
		getDoctorsData();
	}, []);
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			render: (text, record) => (
				<span>
					{record.firstName} {record.lastName}
				</span>
			),
		},
		{
			title: "Phone",
			dataIndex: "phoneNumber",
			render: (text, record) => (
				<span style={{ color: "#0087BA" }}>
					<PiPhoneCallFill style={{ fontSize: 20 }} /> {record?.phoneNumber}
				</span>
			),
		},
		{
			title: "Created At",
			dataIndex: "createdAt",
			render: (
				record
				//  text
			) => <span><FcOvertime style={{ fontSize: 20, marginRight: 8, }}/>{moment(record.createdAt).format("DD-MM-YYYY")}</span> ,
		},
		{
			title: "status",
			dataIndex: "status",
			render: (text, record) => (
				<span>
					<CustomTag status={record?.status} />
				</span>
			),
		},
		{
			title: "Actions",
			dataIndex: "actions",
			render: (text, record) => (
				<div className="d-flex">
					{record.status === "pending" && (
						<h1 className="anchor" onClick={() => changeDoctorStatus(record, "approved")}>
							Approve
						</h1>
					)}
					{record.status === "approved" && (
						<h1 className="anchor" onClick={() => changeDoctorStatus(record, "blocked")}>
							Block
						</h1>
					)}
					{record.status === "blocked" && (
						<h1 className="anchor" onClick={() => changeDoctorStatus(record, "approved")}>
							Approve
						</h1>
					)}
				</div>
			),
		},
	];
	return (
		<Layout>
			<h1 style={{color:'#0087ba'}} className="page-header"><GiStethoscope/> Doctors List</h1>
			<hr />
			<Table columns={columns} dataSource={doctors} />
		</Layout>
	);
}

export default DoctorsList;
