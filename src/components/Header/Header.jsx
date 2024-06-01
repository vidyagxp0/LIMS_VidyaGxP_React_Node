import { faAudible } from "@fortawesome/free-brands-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import AuditTrail from "../../Pages/AuditTrail/AuditTrail";
// import { Button } from "react-bootstrap";

function Header() {
  const [notification, setNotification] = useState(false);
  const [drop, setDrop] = useState(false);
  const dropdownRef = useRef(null);
  const [contact, setContact] = useState(false);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      toggleDrop(), setContact(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDrop = () => {
    setTimeout(() => {
      setDrop(false); // Set drop to false after 2 seconds
    }, 500);
  };

  return (
    <header
      className=" text-dark py-4"
      style={{
        background: "linear-gradient(45deg, #091C3F,#3b8d99, #091C3F )",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div className="container mx-auto text-center flex items-center justify-around">
        <div className="text-center">
          <h3 style={{ fontFamily: "serif" }} className="text-light">
            Welcome to Laboratory Information Management System
          </h3>
        </div>
      </div>

      <div className="flex " style={{ marginRight: "50px" }}>
        <div className="relative mt-3 mr-2">
          <button
            onClick={() => setNotification(!notification)}
            className="text-light hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faBell} className="text-2xl" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              12
            </span>
          </button>
          {notification && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-10">
              {/* <div className="py-2 px-4 bg-gray-800 text-dark rounded-t-md">
                New Notifications
              </div>
              <a
                href="#"
                className="block py-2 px-4 text-light hover:bg-gray-100"
              >
                Stock onboarding status updated successfully. <br />
                <small className="text-light-500">11:31 am</small>
              </a> */}
            </div>
          )}
        </div>
        {contact && (
          <div
            id="About"
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              text: "center",
              top: "175px",
              left: "158px",
              width: "950px",
              height: "500px",
              borderRadius: "25px",
              backgroundColor: "#245A71",
              color: "white",
              fontWeight: "800",
              gap: "20px",
              boxShadow: "0px 0px 15px #245A71",
            }}
          >
            <div
              style={{
                backgroundImage:
                  "url('https://vidyagxp.com/vidyaGxp_logo.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                width: "550px",
                height: "150px",
              }}
            ></div>
            <div className="mb-2">
              <p className="mb-3" style={{ fontSize: "15px" }}>
                E-Mail: admin@vidyagxp.com
              </p>
              <p className="m-0" style={{ fontSize: "15px" }}>
                Mobile: +91-7354654474
              </p>
            </div>
          </div>
        )}

        <div className="relative">
          <div ref={dropdownRef}>
            <button
              onClick={() => setDrop(!drop)}
              className="flex items-center text-light hover:text-gray-300"
            >
              Amit Patel <FontAwesomeIcon icon={faAngleDown} />
            </button>
            {drop && (
              <div className="dropdown-menu">{/* Dropdown menu items */}</div>
            )}
          </div>

          {drop && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div className="py-2 px-4 bg-gray-800 text-dark rounded-t-md flex items-center">
                <img
                  src="/images/logo.png"
                  alt="..."
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="font-bold">Amit Patel</span>
              </div>

              <Link
                to="/AuditTrail"
                className="block py-2 px-4 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faAudible} className="mr-2" />
                Audit Trail
              </Link>
              <div
                onClick={() => {
                  setContact(!contact);
                }}
                className="block py-2 px-4 hover:bg-gray-100"
              >
                {/* <Link to="#" className="block py-2 px-4 hover:bg-gray-100" > */}
                <button id="">
                  <span className="mr-3">♣</span> Contact
                </button>
                {/* </Link> */}
              </div>

              <Link to="/" className="block py-2 px-4 hover:bg-gray-100">
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className="mr-2"
                />
                Log Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
