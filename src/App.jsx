import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/user/layout/UserLayout";
import Landing from "./components/user/Landing/Landing";
import ContactUs from "./components/user/CantactUs/ContactUs"
import Dashbord from "./components/Dashbord/Dashbord";
import DashbordLayout from "./components/Dashbord/Dashbord_layout/DashbordLayout"
import Login from "./components/user/Auth/Login/Login";
import AboutUs from "./components/user/AboutUs/AboutUS";
import Register from "./components/user/Auth/Register/Register";
import ConfirmEmail from "./components/user/Auth/ConfirmEmail/ConfirmEmail";
import ForgetPassword from "./components/user/Auth/ForgetPassword/ForgetPassword";
import ResettPassword from "./components/user/Auth/Reset Password/ResetPassword";
function App() {
<<<<<<< HEAD
  return (
    <div className="font-alegreya">

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirm-email" element={<ConfirmEmail />} />
          <Route path="/" element={<UserLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/services" element={<></>} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        <Route path="/dashbord" element={<DashbordLayout/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
=======
    return (
        <div className="font-alegreya">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/confirm-email" element={<ConfirmEmail />} />
                    <Route path="/forget-password" element={<ForgetPassword />} />
                    <Route path="/reset-password" element={<ResettPassword />} />
                    <Route path="/" element={<UserLayout />}>
                        <Route path="/" element={<Landing />} />
                        <Route path="/services" element={<></>} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
>>>>>>> f17f6966660ef30c64b2645179827e846964b4f9
}
export default App
