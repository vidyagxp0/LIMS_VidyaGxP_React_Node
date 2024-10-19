import React, { useState } from "react";
import { CForm, CFormInput, CButton, CFormCheck } from "@coreui/react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Pages/Auth/Login.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "axios"; // Import axios

function AdminPanel(props) {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputData = (data, setter) => {
    setter(data.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "" || passwd === "") {
      toast.warning("Enter required credentials");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:9000/admin/admin-login",
        {
          email,
          password: passwd,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.token) {
        localStorage.setItem("adminToken", response.data.token);
        toast.success("Login Successful");
        navigate("/admin-panel/userManagement");
        props.show(true);
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid Credentials");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400">
        <div
          className="flex max-w-5xl w-full shadow-2xl rounded-lg overflow-hidden"
          style={{
            height: "700px",
            borderBottomRightRadius: "100px",
            borderTopLeftRadius: "100px",
          }}
        >
          {/* Image Section */}
          <div className="w-1/2 hidden md:block">
            <img
              src="https://www.pharmaceutical-technology.com/wp-content/uploads/sites/24/2021/06/shutterstock_1985751242-scaled.jpg"
              className=" h-full object-cover"
              style={{ borderTopLeftRadius: "100px" }}
              alt="Login"
            />
          </div>
          {/* Form Section */}
          <div
            className="w-full md:w-1/2  bg-gradient-to-r from-[#b3cafe] to-[#C0D2FC]  p-10 flex flex-col justify-center"
            style={{ borderBottomRightRadius: "100px" }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-center items-center">
                <img
                  src="https://connexo.io/assets/img/logo/logo.png"
                  width={"300px"}
                />
              </div>
              <h2 className="text-3xl font-bold text-center text-dark">
                Welcome To Admin Console
              </h2>
            </div>
            <CForm>
              <div className="mb-4 text-gray-200">
                <CFormInput
                  type="text"
                  placeholder="Username"
                  label="Username"
                  onChange={(event) => handleInputData(event, setEmail)}
                  className="p-3 rounded-full w-full bg-white border border-gray-400"
                />
              </div>
              <div className="mb-4 text-gray-200 relative">
                <div className="relative">
                  <CFormInput
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    label="Password"
                    value={passwd}
                    onChange={(event) => handleInputData(event, setPasswd)}
                    className="p-3 rounded-full w-full bg-white border border-gray-400 pr-12" // Adjusted padding to accommodate icon
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer text-gray-400 absolute top-2/3  transform -translate-y-1/2 right-4" // Positioned icon absolutely to the right
                  />
                </div>
              </div>
              <div className="flex justify-between items-center mb-6 text-white">
                <CFormCheck label="Remember me" />
                <a href="#" className="text-sm">
                  Forgot Password
                </a>
              </div>
              <div className="mb-6">
                <CButton
                  className="w-full p-3 rounded-full bg-black text-white font-bold text-2xl"
                  onClick={handleLogin}
                >
                  LOGIN
                </CButton>
              </div>
            </CForm>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default AdminPanel;
