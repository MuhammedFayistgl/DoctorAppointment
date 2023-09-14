/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Modal, ButtonToolbar, Button } from "rsuite";
import RemindIcon from "@rsuite/icons/legacy/Remind";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useCookies } from "react-cookie";
import { FaPowerOff } from "react-icons/fa6";

const Alertdialogs = () => {
	const [open, setOpen] = React.useState(false);
	const [cookies, setCookie, removeCookie] = useCookies(["token"]);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		removeCookie("token", { path: "/DoctorAppointment" });
		dispatch(setUser(null));
		navigate("/login");
		setOpen(false);
	};
	return (
		<>
			<a style={{width:'100%',display:'inherit'}} onClick={handleOpen}>
				{/* <i  className="ri-logout-circle-line "> */}
				<FaPowerOff  />	
				{/* </i> */}
			</a>

			<Modal backdrop="static" role="alertdialog" open={open} onClose={handleClose} size="xs">
				<Modal.Body>
					<RemindIcon style={{ color: "#ffb300", fontSize: 24 }} />
					Once a project is disabled, there will be no update on project report, and project members can access history data only.
					Are you sure you want to proceed ?
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose} appearance="primary">
						Ok
					</Button>
					<Button onClick={() => setOpen(false)} appearance="subtle">
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default React.memo(Alertdialogs);
