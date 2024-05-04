import { CButton, CForm, CFormInput } from "@coreui/react"
import { Link } from "react-router-dom"
import './Login.css'

function Login() {
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
                                   <Link to="/dashboard" className="logo d-block">
                                        <img src="/images/logo.png" alt="..." className="w-100" />
                                   </Link>
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
                                             />
                                        </div>
                                        <div className="mb-3">
                                             <CFormInput
                                                  type="password"
                                                  label="Password"
                                                  placeholder="********"
                                                  text="Must be 8-20 characters long."
                                                  aria-describedby="exampleFormControlInputHelpInline"
                                             />
                                        </div>
                                        <div>
                                             <CButton color="dark" className="w-100">Login</CButton>
                                        </div>
                                   </CForm>
                              </div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default Login
