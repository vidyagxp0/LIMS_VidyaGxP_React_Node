import React, { useState } from "react";
import { CForm, CFormInput, CButton } from "@coreui/react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // Import Axios
import "./Login.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputData = (data, setter) => {
    setter(data.target.value);
  };

  const handleSignup = async () => {
    // Make this function async
    if (username && email && passwd) {
      try {
        const response = await axios.post(
          "http://limsapi.vidyagxp.com/admin/add-user",
          {
            username,
            email,
            password: passwd,
          }
        );
        if (response.status === 201) {
          // Check for successful response
          toast.success("Signup successful");
          setTimeout(() => {
            navigate("/"); // Redirect to home or login page
          }, 1000);
        } else {
          toast.error("Signup failed. Please try again.");
        }
      } catch (error) {
        toast.error(
          "Error during signup: " +
            (error.response?.data?.message || error.message)
        );
      }
    } else {
      toast.warning("Please fill in all fields");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
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
              alt="Signup"
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
              <h2 className="text-xl md:text-3xl md:text-white font-bold text-center ">
                Create Your Account
              </h2>
            </div>
            <CForm>
              <div className="mb-4 md:text-white ">
                <CFormInput
                  type="text"
                  placeholder="Username"
                  label="Username"
                  onChange={(event) => handleInputData(event, setUsername)}
                  className="p-3 rounded-full w-full bg-white border border-gray-400"
                />
              </div>
              <div className="mb-4 md:text-white ">
                <CFormInput
                  type="email"
                  placeholder="Email"
                  label="Email"
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
                    className="cursor-pointer text-gray-400 absolute top-14 transform -translate-y-1/2 right-4"
                  />
                </div>
              </div>
              <div className="mb-6">
                <CButton
                  className="w-full p-3 rounded-full bg-black text-white font-bold text-xl md:text-xl"
                  onClick={handleSignup}
                >
                  SIGN UP
                </CButton>
              </div>
              <div className="text-lg text-white text-center">
                If you have an account already,{" "}
                <Link
                  to="/"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Login
                </Link>
              </div>
            </CForm>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Signup;
