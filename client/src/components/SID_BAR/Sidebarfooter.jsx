import { BsBellFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { Badge } from "rsuite";
import Alertdialogs from "../Alertdialogs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Sidebarfooter = () => {
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
	return (
		<>
			<div className="sidebar-footer">
				<a onClick={() => navigate("/notifications")} >
					<Badge content={user?.unseenNotifications.length} color="yellow" >
						<BsBellFill />
					</Badge>
					{/* <span className="badge badge-pill badge-warning notification">3</span> */}
				</a>
				<a href="#">
					<Badge content={99} color="green">
						<HiMail style={{ fontSize: 18 }} />
					</Badge>
				</a>
				<a href="#">
                <Badge  color="red" >
                    <FiSettings />
                </Badge>
					
				
				</a>
				<a href="#">
                <Alertdialogs  />
					{/* <FaPowerOff /> */}
				</a>
			</div>
		</>
	);
};

export default Sidebarfooter;
