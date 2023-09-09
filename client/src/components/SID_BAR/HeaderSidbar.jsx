import { CiFaceSmile } from "react-icons/ci";
import { TbPointFilled } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Avatar } from "rsuite";
import { Detector } from "react-detect-offline";
import { Link, useNavigate } from "react-router-dom";
const HeaderSidbar = () => {
	const { user } = useSelector((state) => state.user);
	const navigate = useNavigate();

	const role = user?.isAdmin ? "Admin" : user?.isDoctor ? "Doctor" : "User";
	return (
		<>
			<div className="sidebar-header">
				<div className="user-pic" style={{ color: "#fff" }}>
					<Link to="/profile">
						<Avatar circle size="lg">
							<CiFaceSmile style={{ color: "green" }} />
						</Avatar>
					</Link>
				</div>
				<div className="user-info">
					<span className="user-name" onClick={() => navigate("/profile")}>
						<strong>{user?.name}</strong>
					</span>
					<span className="user-role">{role}</span>
					<span className="user-status">
						<Detector
							render={({ online }) => (
								<>
									<TbPointFilled style={{ color: `${online ? `#5cb85c` : `red`}`, fontSize: 20 }} />
									<span className={online ? "normal" : "warning"}>You are {online ? "online" : "offline"}</span>
								</>
							)}
						/>
					</span>
				</div>
			</div>
		</>
	);
};

export default HeaderSidbar;
