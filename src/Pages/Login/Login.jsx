import React, { useState } from "react";
import { CButton, CForm, CFormInput } from "@coreui/react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Login.css'

function Login(props) {
	const [email, setEmail] = useState('');
	const [passwd, setPasswd] = useState('');
	const navigate = useNavigate();

	const handleInputData = (data, setter) => {
		setter(data.target.value);
	}
	  
	const handleLogin = () => {
		if (email === "Amit" && passwd === "Amit@121") {
			navigate('/dashboard');
			props.show(true);
		} else if (email === "" || passwd === "") {
			toast.warning("Enter required credentials");
		}
		else {
			toast.error("Invalid Credentials");
		}
	}

	return (
		<>
			<div id="login-container">
				<div className="left-side p-5 d-flex justify-content-center align-items-center">
					<div className="image">
						<img src="/images/login.jpg" alt="..." className="w-100" />
					</div>
				</div>
				<div className="right-side p-5 d-flex align-items-center">
					<div className="w-100">
						<div className="d-flex justify-content-center">
							<div className="logo d-block">
								<img src="/images/logo.png" alt="..." className="w-100" />
							</div>
						</div>
						<div className="head text-center h2">Welcome back!</div>
						<div className="slogan text-center text-muted fs-6">Enter your credentials to access the LIMS software.</div>
						<div>
							<CForm>
								<div className="mb-3">
									<CFormInput
										type="email"
										label="Email address"
										placeholder="name@example.com"
										aria-describedby="exampleFormControlInputHelpInline"
										onChange={(event) => handleInputData(event, setEmail)}
									/>
								</div>
								<div className="mb-3">
									<CFormInput
										type="password"
										label="Password"
										placeholder="********"
										text="Must be 8-20 characters long."
										aria-describedby="exampleFormControlInputHelpInline"
										onChange={(event) => handleInputData(event, setPasswd)}
									/>
								</div>
								<div>
									<CButton color="dark" className="w-100" onClick={handleLogin}>Login</CButton>
								</div>
							</CForm>
						</div>
					</div>
				</div>
			</div>

			<div>
				<ToastContainer />
			</div>
		</>
	)
}

export default Login
