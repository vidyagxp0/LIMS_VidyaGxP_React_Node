/* eslint-disable react/prop-types */
import { faAudible } from "@fortawesome/free-brands-svg-icons";
import "./Header.css";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { CAvatar } from "@coreui/react";
import AdminPanel from "../AdminPanel/AdminPanel";
import UserMgnt from "../AdminPanel/User Management/UserMgnt";

function Header({ toggleSidebarClass }) {
  const [notification, setNotification] = useState(false);
  const [drop, setDrop] = useState(false);
  const dropdownRef = useRef(null);
  const [contact, setContact] = useState(false);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      toggleDrop();
      setContact(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDrop = () => {
    setTimeout(() => {
      setDrop(false);
    }, 500);
  };

  return (
    <header
      id="head"
      className=" text-gray-900 w-[100%] text-[16px] gap-10 bg-gradient-to-r from-[#091C3F] via-[#3b8d99] to-[#091C3F] h-[86px] flex items-center  justify-center "
    >
      <div className="menuIconContainer  w-[10%] text-center text-blue font-extrabold text-xl  rounded-full">
        <button className="hidden xm:block" onClick={toggleSidebarClass}>
          <TfiMenu className="Menu text-3xl p-1 text-white active:text-2xl border-white" />
        </button>
      </div>

      <div className="flex items-center  w-[80%] text-[14px] justify-center">
        <p className="text-gray-100 mt-4 font-serif text-center xsm:text-[0.5em] text-[0.8em] sm:text-[1em] md:text-[1.2em] lg:text-[1.2em] xl:text-[1.8em]">
          Welcome to Laboratory Information Management System
        </p>
      </div>

      <div className="flex items-center    w-[20%]">
        <div className="relative  mr-3">
          <button
            onClick={() => setNotification(!notification)}
            className="text-gray-100 hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faBell} className="text-xl mr-4" />
            <span className="absolute top-0 right-0 inline-flex mr-4 items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              12
            </span>
          </button>
          {notification && (
            <div className="absolute right-0 mt-2 w-64  bg-white rounded-md shadow-lg z-10"></div>
          )}
        </div>
        {contact && (
          <div
            id="About"
            className="absolute flex flex-col items-center justify-center text-center top-[175px] left-[450px]  w-[30%]  rounded-3xl bg-[#245A71] text-white font-extrabold gap-5 shadow-lg"
          >
            <div
              className="bg-no-repeat bg-contain w-full  h-28 "
              style={{
                backgroundImage:
                  "url('https://vidyagxp.com/vidyaGxp_logo.png')",
              }}
            ></div>
            <div className="mb-2">
              <p className="mb-3 text-base ">E-Mail: admin@vidyagxp.com</p>
              <p className="m-0 text-base ">Mobile: +91-7354654474</p>
            </div>
          </div>
        )}

        <div className="relative mr-2">
          <div ref={dropdownRef}>
            <button
              onClick={() => setDrop(!drop)}
              className="text-center text-[0.5em] xsm:text-[0.6em] sm:text-[0.6em] md:text-[0.8em] lg:text-[0.8em] xl:text-[1em] text-white"
            >
              <CAvatar
                color="light"
                size="sm"
                status="success"
                className="mr-2"
              >
                <img
                  className="rounded-full "
                  src="https://cdn-icons-png.freepik.com/512/5003/5003094.png"
                  alt=""
                />
              </CAvatar>
              Amit Patel <FontAwesomeIcon icon={faAngleDown} />
            </button>

            {drop && (
              <div className="absolute left-0 z-50 py-2 mt-1 text-base bg-white border border-gray-300 rounded">
              </div>
            )}
          </div>

          {drop && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div className="py-2 px-4 bg-gray-800 text-gray-900 rounded-t-md flex items-center">
                <img
                  src="/images/logo.png"
                  alt="Profile"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="font-bold text-white">Amit Patel</span>
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
                className="block py-2 px-4 hover:bg-gray-100 cursor-pointer"
              >
                <span className="mr-3">♣</span> About
              </div>
              <Link
                to="/admin-panel/userManagement"
                className="block py-2 px-4 hover:bg-gray-100"
              >
                <span className="mr-3">◘</span> Admin Panel
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
    </header>
  );
}

export default Header;
