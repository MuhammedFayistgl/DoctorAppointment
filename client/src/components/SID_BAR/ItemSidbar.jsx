
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SidbarItem = () => {
	const { user } = useSelector((state) => state.user);
	const userMenu = [
		{
			name: "Home",
			path: "/",
			icon: "ri-home-line",
		},
		{
			name: "Appointments",
			path: "/appointments",
			icon: "ri-file-list-line",
		},
		{
			name: "Apply Doctor",
			path: "/apply-doctor",
			icon: "ri-hospital-line",
		},
	];

	const doctorMenu = [
		{
			name: "Home",
			path: "/",
			icon: "ri-home-line",
		},
		{
			name: "Appointments",
			path: "/doctor/appointments",
			icon: "ri-file-list-line",
		},
		{
			name: "Profile",
			path: `/doctor/profile/${user?._id}`,
			icon: "ri-user-line",
		},
	];

	const adminMenu = [
		{
			name: "Home",
			path: "/",
			icon: "ri-home-line",
		},
		{
			name: "Users",
			path: "/admin/userslist",
			icon: "ri-user-line",
		},
		{
			name: "Doctors",
			path: "/admin/doctorslist",
			icon: "ri-user-star-line",
		},
		{
			name: "Profile",
			path: "/profile",
			icon: "ri-user-line",
		},
	];
	const menuToBeRendered = user?.isAdmin ? adminMenu : user?.isDoctor ? doctorMenu : userMenu;
	
	return (
		<>
			{menuToBeRendered.map((menu, i) => {
				const isActive = `/${location.href.split("/").pop()}` === menu.path;

				return (
					<li key={i} className="sidebar-dropdown">
						<Link to={menu.path}  className={` ${isActive && "active"}`}>
							<i style={{ fontSize: 18 }} className={menu.icon}></i>
							<span>{menu.name}</span>
						</Link>
					</li>
				);
			})}
		</>
	);
};

export default SidbarItem;
