import { faAudible } from "@fortawesome/free-brands-svg-icons"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { faAngleDown, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"

function Header() {
     const [drop, setDrop] = useState(false)
     const [notification, setNotification] = useState(false)
     const dropStyle = {
          position: "absolute",
          top: "100%",
          right: 0,
          zIndex: 10,
          width: "250px"
     }

     const notifyStyle = {
          position: "absolute",
          top: "100%",
          right: 25,
          zIndex: 10,
          width: "300px"
     }
     return (
          <>

               <header className="border-bottom h-100 d-flex align-items-center">
                    <div className="container-fluid w-100">
                         <div className="row align-items-center">
                              <div className="col-md-4">
                                   <h3 className="mb-0 fw-bold mx-4">VidyaGxP-LIMS</h3>
                              </div>
                              <div className="col-md-4 px-0">
                                   <div className="small fw-bold text-primary">Laboratory Information Management System</div>
                                   <div className="small text-muted">
                                        <strong className="text-dark">E-Mail:&nbsp;</strong>admin@vidyagxp.com
                                   </div>
                                   <div className="small text-muted">
                                        <strong className="text-dark">Mobile:&nbsp;</strong>+91-7354654474
                                   </div>
                              </div>
                              <div className="col-md-2">
                                   <div className="h6 mb-0 text-muted">
                                        <span className="text-dark fw-bold">Expiry:&nbsp;</span>31/10/2025
                                   </div>
                              </div>
                              <div className="col-md-2">
                                   <div className="d-flex justify-content-end">
                                        <div className="d-flex position-relative">
                                             <Link className="position-relative me-4" onClick={() => setNotification(!notification)}>
                                                  <FontAwesomeIcon icon={faBell} className="fs-4" />
                                                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger text-light" style={{ padding: '3px 4px' }}>12<span className="visually-hidden">unread messages</span></span>
                                             </Link>
                                             {notification &&
                                                  <div className="border shadow bg-white list-group" style={notifyStyle}>
                                                       <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                                                            New Notifications
                                                       </a>
                                                       <a href="#" className="list-group-item list-group-item-action fs-6">
                                                            Stock onboarding status updated successfully. <br />
                                                            <small className="text-muted">11:31 am</small>
                                                       </a>

                                                       <a href="#" className="list-group-item list-group-item-action">
                                                            Error occured during submition. <br />
                                                            <small className="text-muted">02:56 pm</small>
                                                       </a>
                                                       <a href="#" className="list-group-item list-group-item-action active">Unread Notifications</a>
                                                       <a href="#" className="list-group-item list-group-item-action">
                                                            Inventory registered successfully. <br />
                                                            <small className="text-muted">09:47 am</small>
                                                       </a>
                                                  </div>
                                             }
                                        </div>
                                        <div className="d-flex position-relative">
                                             <div className="fw-bold cursor-pointer" onClick={() => setDrop(!drop)}>
                                                  Amit Patel <FontAwesomeIcon icon={faAngleDown} />
                                             </div>
                                             {drop &&
                                                  <div className="border shadow bg-white" style={dropStyle}>
                                                       <div className="d-flex align-items-center py-2 px-3 border-bottom" style={{ gap: "10px" }}>
                                                            <img src="/images/logo.png" alt="..." style={{ width: "50px" }} />
                                                            <div className="fw-bold mb-0">Amit Patel</div>
                                                       </div>
                                                       <Link to="#" className="py-2 px-3 d-block border-bottom">
                                                            <FontAwesomeIcon icon={faAudible} />&nbsp;&nbsp;Audit Trail
                                                       </Link>
                                                       <Link to="/" className="py-2 px-3 d-block">
                                                            <FontAwesomeIcon icon={faArrowRightFromBracket} />&nbsp;&nbsp;Log Out
                                                       </Link>
                                                  </div>
                                             }
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </header>

          </>
     )
}

export default Header
