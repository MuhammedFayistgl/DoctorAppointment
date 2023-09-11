import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Doctor from "../components/Doctor";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { AxiosConnection } from "../utils/AxiosINSTENCE";
import Pagnation from "../components/Pagnation";

function Home() {
	const [doctors, setDoctors] = useState([]);
	const [page, setpage] = useState(1);
	const [perpage] = useState(4);
/**  */
	const  end = page * perpage;
	const  start = end - perpage


	const dispatch = useDispatch();
	const getData = async () => {
		try {
			dispatch(showLoading());
			const response = await AxiosConnection.get("api/user/get-all-approved-doctors");
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
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					flexWrap: "nowrap",
					gap: "2%",
					height: "-webkit-fill-available",
				}}
			>
				<div style={{ overflow: "scroll", display: "flex", flexDirection: "row", flexWrap: "wrap", }}>
					{doctors.slice(start,end).map((doctor, i) => (
						<Doctor key={i} doctor={doctor} />
					))}
				</div>

				<div style={{ display: "flex", placeContent: "center" }}>
					<Pagnation setpage={setpage} length={Math.ceil(doctors?.length/4) } />
				</div>
			</div>
		</Layout>
	);
}

export default Home;
