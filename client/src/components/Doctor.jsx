/* eslint-disable react/prop-types */
// import React from "react";
import { useNavigate } from "react-router-dom";
import { RiSpeakFill } from "react-icons/ri";
import { PiPhoneCallFill } from "react-icons/pi";
import ProfilAvathar from "./ProfilAvathar";

function Doctor({ doctor }) {
	const navigate = useNavigate();
	return (
		<>
			<div className=" cursor-pointer m-1">	
				<div className="card-card green" onClick={() => navigate(`/book-appointment/${doctor._id}`)}>
					<div className="additional">
						<div className="user-card">
							<div className="level ">Level 13</div>					
							<ProfilAvathar/>
							<div className="points ">5,312 Points</div>
						</div>
						<div className="more-info">
							<span className="name">
								{doctor.firstName} {doctor.lastName}
							</span>
							<div className="coords">
								<span>Fee per Visit :</span>
								<span> {doctor.feePerCunsultation}</span>
							</div>
							
							<div className="coords">
								<span>Timings :</span>
								<span>
									{" "}
									{doctor?.timings[0]} - {doctor?.timings[1]}
								</span>
							</div>
							<div className="coords">
								<span></span>
								<span style={{ color: "#0087BA" }}>
									
								<PiPhoneCallFill style={{ fontSize: 20 }} /> {doctor.phoneNumber}
								</span>
							</div>
							<div className="stats">
								<div>
									<div className="title">Awards</div>
									<i className="fa fa-trophy"></i>
									<div className="value">2</div>
								</div>
								<div>
									<div className="title">Matches</div>
									<i className="fa fa-gamepad"></i>
									<div className="value">27</div>
								</div>
								<div>
									<div className="title">Pals</div>
									<i className="fa fa-group"></i>
									<div className="value">123</div>
								</div>
								<div>
									<div className="title">Coffee</div>
									<i className="fa fa-coffee"></i>
									<div className="value infinity">∞</div>
								</div>
							</div>
						</div>
					</div>
					<div className="general">
						<span className="name">
							{doctor.firstName} {doctor.lastName}
						</span>
						<p>{doctor.address}</p>
						<div className="coords">
							<span>
								<RiSpeakFill style={{ color: "#0087BA", fontSize: 15 }} />
							</span>
							<span style={{ marginLeft: 10 }}>English, Hindi, Bengali</span>
							<div className="coords">
								<span>Timings :</span>
								<span style={{ color: "#0087BA" }}>
									{doctor?.timings[0]} - {doctor?.timings[1]}
								</span>
							</div>
						</div>
						<span style={{ color: "#FC9916" }} className="more">
							<PiPhoneCallFill style={{ fontSize: 20 }} /> {doctor.phoneNumber}
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Doctor;

// <div
//   className="card p-2 cursor-pointer"
//   onClick={() => navigate(`/book-appointment/${doctor._id}`)}
// >
//   <h1 className="card-title">
//     {doctor.firstName} {doctor.lastName}
//   </h1>
//   <hr />
//   <p>
//     <b>Phone Number : </b>
//     {doctor.phoneNumber}
//   </p>
//   <p>
//     <b>Address : </b>
//     {doctor.address}
//   </p>
//   <p>
//     <b>Fee per Visit : </b>
//     {doctor.feePerCunsultation}
//   </p>
//   <p>
//     <b>Timings : </b>
//     {doctor?.timings[0]} - {doctor?.timings[1]}
//   </p>
// </div>
