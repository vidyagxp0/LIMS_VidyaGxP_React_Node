import { faAudible } from "@fortawesome/free-brands-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


function Header() {
  const [drop, setDrop] = useState(false);
  const [notification, setNotification] = useState(false);
  

  return (
    <header
      className=" text-dark py-4"
      style={{ background: "#091C3F", height: "72px" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-light">
            <span style={{ color: "orange" }}>VidyaGxP</span>-LIMS
          </h3>
        </div>
        <div className="text-center">
          {/* <div className="text-sm font-semibold text-green-500">Laboratory Information Management System</div>
          <div className="text-sm text-gray-400">
            <strong className="text-dark">E-Mail:</strong> admin@vidyagxp.com
          </div>
          <div className="text-sm text-gray-400">
            <strong className="text-dark">Mobile:</strong> +91-7354654474
          </div> */}
          <h1 className="text-light">Welcome to Our laboratory</h1>
        </div>
        {/* <div className="text-right">
          <div className="text-sm text-gray-400">
            <span className="text-dark font-semibold">Expiry:</span> 31/10/2025
          </div>
        </div> */}
        <div className="flex items-center">
          <div className="relative mr-4">
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
                <div className="py-2 px-4 bg-gray-800 text-dark rounded-t-md">
                  New Notifications
                </div>
                <a
                  href="#"
                  className="block py-2 px-4 text-light hover:bg-gray-100"
                >
                  Stock onboarding status updated successfully. <br />
                  <small className="text-light-500">11:31 am</small>
                </a>
                {/* Add more notification items */}
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setDrop(!drop)}
              className="flex items-center text-light hover:text-gray-300"
            >
              Amit Patel <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
            </button>
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
                <Link to="#" className="block py-2 px-4 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faAudible} className="mr-2" />
                  Audit Trail
                </Link>

                <Link to="#" className="block py-2 px-4 hover:bg-gray-100">
                  <button>
                    <span className="mr-3">♣</span> About
                  </button>
                </Link>

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
      </div>
    </header>
  );
}

export default Header;
