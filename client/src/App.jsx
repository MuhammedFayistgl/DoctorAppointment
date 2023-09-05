// import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
// import { Button } from "antd";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { lazy } from "react";
//
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));
const PublicRoute = lazy(() => import("./components/PublicRoute"));
const ApplyDoctor = lazy(() => import("./pages/ApplyDoctor"));
const Notifications = lazy(() => import("./pages/Notifications"));
const Userslist = lazy(() => import("./pages/Admin/Userslist"));
const DoctorsList = lazy(() => import("./pages/Admin/DoctorsList"));
const Profile = lazy(() => import("./pages/Doctor/Profile"));
const BookAppointment = lazy(() => import("./pages/BookAppointment"));
const Appointments = lazy(() => import("./pages/Appointments"));
const DoctorAppointments = lazy(() => import("./pages/Doctor/DoctorAppointments"));
const Userprofile = lazy(() => import("./pages/User/Userprofile"));

function App() {
	const { loading } = useSelector((state) => state.alerts);
	return (
		<HashRouter>
			{loading && (
				<div className="spinner-parent">
					<div className="spinner-border" role="status"></div>
				</div>
			)}
			<Toaster position="top-center" reverseOrder={false} />
			<Routes>
				<Route
					path="/login"
					element={
						<PublicRoute>
							<Login />
						</PublicRoute>
					}
				/>
				<Route
					path="/register"
					element={
						<PublicRoute>
							<Register />
						</PublicRoute>
					}
				/>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/apply-doctor"
					element={
						<ProtectedRoute>
							<ApplyDoctor />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/notifications"
					element={
						<ProtectedRoute>
							<Notifications />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/admin/userslist"
					element={
						<ProtectedRoute>
							<Userslist />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/admin/doctorslist"
					element={
						<ProtectedRoute>
							<DoctorsList />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/doctor/profile/:userId"
					element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/book-appointment/:doctorId"
					element={
						<ProtectedRoute>
							<BookAppointment />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/appointments"
					element={
						<ProtectedRoute>
							<Appointments />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/doctor/appointments"
					element={
						<ProtectedRoute>
							<DoctorAppointments />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/profile"
					element={
						<ProtectedRoute>
							<Userprofile />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</HashRouter>
	);
}

export default App;
