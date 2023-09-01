import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Col, Row } from "antd";
import Doctor from "../components/Doctor";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { AxiosConnection } from "../utils/AxiosINSTENCE";
import Pagnation from "../components/Pagnation";

function Home() {
	const [doctors, setDoctors] = useState([]);
	const dispatch = useDispatch();
	const getData = async () => {
		try {
			dispatch(showLoading());
			const response = await AxiosConnection.get("api/user/get-all-approved-doctors", {
				headers: {
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
			});
			dispatch(hideLoading());
			if (response.data.success) {
				setDoctors(response.data.data);
			}
		} catch (error) {
			dispatch(hideLoading());
		}
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<Layout>
			<div
				style={{ display: "flex", flexDirection: "column", justifyContent: "space-between",flexWrap:'nowrap',gap:'2%', height: "-webkit-fill-available", }}
			>
				<div style={{overflow:'scroll',display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
					{/* <Row gutter={20}> */}
					{doctors.map((doctor, i) => (
						// <Col span={8} xs={24} sm={24} lg={8}>
						<Doctor key={i} doctor={doctor} />
						// </Col>
					))}

					{/* </Row> */}
				</div>

				<div style={{ display: "flex", placeContent: "center" }}>
					<Pagnation />
				</div>
			</div>
		</Layout>
	);
}

export default Home;
