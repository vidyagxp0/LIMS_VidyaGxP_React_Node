import React, { useState } from "react";
import {
  CForm,
  CFormInput,
  CButton,
  CFormCheck,
  CFormSelect,
} from "@coreui/react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BASE_URL } from "../../config.json";
import ToastContainer from "../../components/HotToaster/ToastContainer";
import toast from "react-hot-toast";

function Login(props) {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userRole, setUserRole] = useState("admin");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleInputData = (data, setter) => {
    setter(data.target.value);
  };

  const handleLogin = async () => {
    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }
    if (!passwd.trim()) {
      toast.error("Password is required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:9000/admin/user-login",
        {
          email,
          password: passwd,
        }
      );
      console.log("dataaaa ", response);

      const { token, data } = response.data;

      if (token) {
        localStorage.setItem("token", token);
      }
      if (data && data.name) {
        localStorage.setItem("user", JSON.stringify(data.name));
      }

      if (data.user_id) {
        localStorage.setItem("user_id", data.user_id);
      }

      toast.success("Login successful");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Invalid credentials.");
      } else if (error.response && error.response.status === 500) {
        toast.error("Server error. Please try again later.");
      } else {
        toast.error("Network error. Please check your connection.");
      }
      console.error("Login error:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
        <div
          className="flex flex-col md:flex-row m-4 max-w-5xl w-full shadow-2xl rounded-lg overflow-hidden h-auto md:h-[700px]"
          style={{
            borderBottomRightRadius: "100px",
            borderTopLeftRadius: "100px",
          }}
        >
          <div className="w-0 md:w-1/2 hidden md:block ">
            <img
              src="https://www.pharmaceutical-technology.com/wp-content/uploads/sites/24/2021/06/shutterstock_1985751242-scaled.jpg"
              className="h-full object-cover"
              style={{ borderTopLeftRadius: "100px" }}
              alt="Login"
            />
          </div>

          <div
            className="w-full md:w-1/2 bg-gradient-to-r from-[#b3cafe] to-[#C0D2FC] p-10 flex flex-col justify-center"
            style={{ borderBottomRightRadius: "100px" }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-center items-center mb-6">
                <img src="login.png" width={"200px"} className="md:w-300px" />
              </div>
              <h2 className="text-xl md:text-3xl md:text-white font-bold text-center mb-2">
                Welcome To Laboratory Information Management System.
              </h2>
            </div>
            <CForm>
              <div className="mb-4 md:text-white ">
                <CFormInput
                  type="text"
                  placeholder="Username or Email"
                  label="Username Or Email"
                  onChange={(event) => handleInputData(event, setEmail)}
                  className="p-3 rounded-full w-full bg-white border border-gray-400"
                />
              </div>
              <div className="mb-4 md:text-white relative">
                <div className="relative">
                  <CFormInput
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    label="Password"
                    value={passwd}
                    onChange={(event) => handleInputData(event, setPasswd)}
                    className="p-3 rounded-full w-full bg-white border border-gray-400 pr-12"
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer text-zinc-500 absolute top-[62px] transform -translate-y-1/2 right-4"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center mb-6 md:text-white">
                <CFormCheck label="Remember me" />
                <a href="#" className="text-sm md:text-white">
                  Forgot Password
                </a>
              </div>
              <div className="mb-6">
                <CButton
                  className="w-full p-3 rounded-full bg-black text-white font-bold text-xl md:text-xl"
                  onClick={handleLogin}
                >
                  LOGIN
                </CButton>
              </div>
            </CForm>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
