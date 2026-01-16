import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Register from "./pages/Admin-Portal/userComponents/register";
import User from "./pages/Admin-Portal/userComponents/user";
import Login from "./pages/Admin-Portal/userComponents/login";
import ForgetPassword from "./pages/Admin-Portal/userComponents/forget-password";
import ResetPassword from "./pages/Admin-Portal/userComponents/reset-password";
import Report from "./pages/Admin-Portal/reportComponents/report";
import CreateReport from "./pages/Admin-Portal/reportComponents/create-report";
import EditReport from "./pages/Admin-Portal/reportComponents/edit-report";
import Meeting from "./pages/Admin-Portal/meetingComponents/meeting";
import CreateMeeting from "./pages/Admin-Portal/meetingComponents/create-meeting";
import EditMeeting from "./pages/Admin-Portal/meetingComponents/edit-meeting";
import UserMeeting from "./pages/Participant-Portal/meetingcomponents/user-meeting";
import UserRegister from "./pages/Participant-Portal/userComponents/user-register";
import UserLogin from "./pages/Participant-Portal/userComponents/user-login";
import UserForget from "./pages/Participant-Portal/userComponents/user-forget";
import AdminDashboard from "./pages/Admin-Portal/admin-dashboard";
import UPComing from "./pages/Participant-Portal/meetingcomponents/up-coming";
import Rating from "./pages/Participant-Portal/ui/rating";
import UserAside from "./pages/Participant-Portal/ui/user-aside";
import UserDashboard from "./pages/Participant-Portal/user-dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/user-aside" element={<UserAside />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/up-coming" element={<UPComing />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-forget" element={<UserForget />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-register" element={<UserRegister />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/" element={<Landing />} />
          <Route path="/user-meeting" element={<UserMeeting />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/create-meeting" element={<CreateMeeting />} />
          <Route path="/edit-meeting/:id" element={<EditMeeting />} />
          <Route path="/report" element={<Report />} />
          <Route path="/create-report" element={<CreateReport />} />
          <Route path="/edit-report/:id" element={<EditReport />} />
          <Route path="/user" element={<User />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
