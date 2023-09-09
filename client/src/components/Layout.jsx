/* eslint-disable react/prop-types */
import { useState } from "react";
import "../layout.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "antd";

import {FaBarsStaggered} from 'react-icons/fa6'
import Sidebar from "./SID_BAR/Sidebar";

function Layout({ children }) {
	const [collapsed, setCollapsed] = useState(true);
	const { user } = useSelector((state) => state.user);

	const navigate = useNavigate();

	
	// /apply-doctor

	return (
		<>
			{/* <div className="main">
				<div className="d-flex layout"> */}
					{/* <div className="sidebar">
						<div className="sidebar-header">
							<h1 className="logo">SH</h1>
							<h1 className="role">{role}</h1>
						</div>

						<div className="menu">
							{menuToBeRendered.map((menu, i) => {
								const isActive = location.pathname === menu.path;
								return (
									<div key={i} className={`d-flex menu-item ${isActive && "active-menu-item"}`}>
										<Link to={menu.path}>
											<i className={menu.icon}></i>
										</Link>
										{!collapsed && <Link to={menu.path}>{menu.name}</Link>}
									</div>
								);
							})}
							<div className={`d-flex menu-item `}>
								<Alertdialogs coll={collapsed} />
							</div>
						</div>
					</div> */}
					<div className={`page-wrapper chiller-theme ${collapsed ? `toggled`:''}`}>
						<a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
							
							<FaBarsStaggered style={{color:'#ffff',fontSize:25}}
							onClick={()=> setCollapsed(true) }
							/>
						</a>
						<Sidebar collapsed={collapsed}  setCollapsed={setCollapsed}  />

						<div className="content">
							

							<main className="page-content">
							<div className="header">
								{collapsed ? (
									<i className="ri-menu-2-fill header-action-icon" onClick={() => setCollapsed(false)}></i>
								) : (
									<i className="ri-close-fill header-action-icon" onClick={() => setCollapsed(true)}></i>
								)}

								<div className="d-flex align-items-center px-4">
									<Badge count={user?.unseenNotifications.length} onClick={() => navigate("/notifications")}>
										<i className="ri-notification-line header-action-icon pl-3"></i>
									</Badge>

									<Link className="anchor mx-2" to="/profile">
										{user?.name}
									</Link>
								</div>
							</div>
								
									<div className="body">{children}</div>
							
							</main>
						</div>
					</div>
				{/* </div>
			</div> */}
		</>
	);
}

export default Layout;
