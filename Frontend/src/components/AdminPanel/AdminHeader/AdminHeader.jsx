import React from 'react'
import { faAudible } from "@fortawesome/free-brands-svg-icons";
import "../../Header/Header.css";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CAvatar } from "@coreui/react";

function AdminHeader() {
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
      className="text-gray-900 w-[100%] mobile:flex-col  desktop:flex-col laptop:flex-col tablet:flex-col py-4 bg-gradient-to-r from-[#091C3F] via-[#3b8d99] to-[#091C3F] h-[72px] flex items-center justify-center  px-4 tablet:px-6 laptop:px-8"
    >
      <div className="flex items-center  w-[75%]  justify-center ">
        <div className="text-center">
          <h3 className="text-gray-100 font-serif  text-2xl mobile:text-lg tablet:text-xl">
            Welcome to Laboratory Information Management System
          </h3>
        </div>
      </div>

      <div className="flex items-end  justify-center w-[15%]">
        <div className="relative  mr-3">
          <button
            onClick={() => setNotification(!notification)}
            className="text-gray-100 hover:text-gray-300"
          >
            <FontAwesomeIcon
              icon={faBell}
              className="text-xl mobile:text-2xl"
            />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              12
            </span>
          </button>
          {notification && (
            <div className="absolute right-0 mt-2 w-64 mobile:w-72 bg-white rounded-md shadow-lg z-10">
              {/* Notification content */}
            </div>
          )}
        </div>
        {contact && (
          <div
            id="About"
            className="absolute flex flex-col items-center justify-center text-center top-[175px] left-[180px] tablet:left-[50px] laptop:left-[100px] desktop:left-[158px] w-[60%] tablet:w-[70%] laptop:w-[50%] desktop:w-[850px]  h-[450px] rounded-[25px] bg-[#245A71] text-white font-extrabold gap-5 shadow-lg"
          >
            <div
              className="bg-no-repeat bg-contain w-[300px] tablet:w-[400px] laptop:w-[500px] h-[100px] tablet:h-[125px] laptop:h-[150px]"
              style={{
                backgroundImage:
                  "url('https://vidyagxp.com/vidyaGxp_logo.png')",
              }}
            ></div>
            <div className="mb-2">
              <p className="mb-3 text-sm tablet:text-base laptop:text-lg">
                E-Mail: admin@vidyagxp.com
              </p>
              <p className="m-0 text-sm tablet:text-base laptop:text-lg">
                Mobile: +91-7354654474
              </p>
            </div>
          </div>
        )}

        <div className="relative">
          <div ref={dropdownRef}>
            <button
              onClick={() => setDrop(!drop)}
              className="flex items-center text-gray-100 hover:text-gray-300"
            >
               <CAvatar color="light" size="lg" status="success" className="mr-2">
                <img
                  className="rounded-full "
                  src="https://cdn-icons-png.freepik.com/512/5003/5003094.png"
                  alt=""
                />
              </CAvatar>
              Amit Patel <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
            </button>
            {drop && (
              <div className="absolute left-0 z-50 py-2 mt-1 text-base bg-white border border-gray-300 rounded">
                {/* Dropdown menu items */}
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
                className="block py-2 px-4 hover:bg-gray-100 cursor-pointer"
              >
                <span className="mr-3">♣</span> About
              </div>

              <Link to="/admin-login" onClick={()=>localStorage.clear()} className="block py-2 px-4 hover:bg-gray-100">
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

export default AdminHeader
