/* eslint-disable no-unused-vars */
import { FaBarsStaggered } from "react-icons/fa6";
import { TbPointFilled } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { CgAdidas } from "react-icons/cg";

import { Avatar } from "rsuite";
import Sidebarfooter from "./Sidebarfooter";
import SidbarItem from "./ItemSidbar";
import HeaderSidbar from "./HeaderSidbar";

// eslint-disable-next-line react/prop-types
const Sidebar = ({collapsed,setCollapsed}) => {
	return (
		<>
			{/* <!-- Button  --> */}

			<nav id="sidebar" className="sidebar-wrapper">
				<div className="sidebar-content">
					<div className="sidebar-brand">
						<a>SH Hospitel</a>
						<div id="close-sidebar">
							<FaBarsStaggered  onClick={() => setCollapsed(false)}/>
						</div>
					</div>
					{/* sidebar-brand */}
					<HeaderSidbar/>
					{/* <!-- sidebar-header --> */}
					<div className="sidebar-search">
						<div>
							<div className="input-group">
								<input type="text" className="form-control search-menu" placeholder="Search..." />
								<div className="input-group-append">
									<span className="input-group-text">
										{/* <i className="fa fa-search" aria-hidden="true"></i> */}
										<BiSearchAlt style={{ fontSize: 18 }} />
									</span>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- sidebar-search --> */}
					<div className="sidebar-menu">
						<ul>
							<li className="header-menu">
								<span>General</span>
							</li>
							<SidbarItem/>
						</ul>
					</div>
					{/* <!-- sidebar-menu  --> */}
				</div>
				{/* <!-- sidebar-content  --> */}
			<Sidebarfooter/>
				{/* <!-- sidebar-footer  --> */}
			</nav>
		
		</>
	);
};

export default Sidebar;
