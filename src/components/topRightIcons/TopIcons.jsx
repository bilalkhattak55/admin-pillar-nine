"use client"

import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { useAuthContext } from "@/context/authContext";
// import profileIcon from "/public/assets/icons/profile.png";
// import settingIcon from "/public/assets/icons/setting.svg";

function TopIcons() {
   const { isSideBarOpen, setIsSideBarOpen } = useAuthContext();
  // const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  // const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [isPopupVisible, setPopupVisible] = useState();
  const popupRef = useRef(null);

  const handleSettingsClick = () => {
    if (isPopupVisible) {
      setPopupVisible(false);
    } else {
      setPopupVisible(true);
    }
  };


  const handleOutsideClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopupVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // handle side bar
  const handleClick = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleLogout =()=> {
    router.push('/')
    toast.success("Logout successfully!")
  }
  return (
    <>
      <div className=" my-16 ms-auto flex justify-end items-center relative">
        <div className="flex justify-between items-center w-full px-8 sm:px-16">
          <button
            type="button"
            className={`w-[38px] h-[38px] cursor-pointer sm:w-[48px] sm:h-[48px]  border-0 bg-white/0 ${
              isSideBarOpen ? "hidden" : ""
            }`}
            onClick={handleClick}
          >
            <img
              src="/assets/pillar-nine-menu"
              alt="hamburger icon"
              className="w-full"
            />
          </button>
          <div className="flex justify-end items-center ms-auto">
            <div
              className="me-3 cursor-pointer"
              id="settings-button"
              onClick={handleSettingsClick}
            >
              <img
              className="ms-5"
                src='/assets/icons/pillar-nine-sett.png'
                alt="pillar-nine-settingIcon"
                height={"25px"}
                width={"25px"}
              />
            </div>
            {/* <Link href="/dashboard/" className="rounded-full">
              <img
                className="rounded-full"
                src='/assets/icons/pillar-nine-user.png'
                alt=""
                height={"33px"}
                width={"33px"}
              />
            </Link> */}
          </div>
        </div>

        {isPopupVisible && (
          <div
            className="text-white bg-[#e6d366] absolute top-0 right-[9rem] text-left rounded-lg cursor-pointer w-[210px]"
            id="popup"
            ref={popupRef}
          >
            {/* <Link
              href={"/dashboard/"}
              className="flex  no-underline	 p-3 ps-4 "
            >
              <img src="/assets/icons/profile.svg" alt="" />
              <p className="ps-4 text-black">Profile</p>
            </Link>
            <Link
              href={"/dashboard"}
              className="flex no-underline	 p-3 ps-4 text-black"
            >
              <img src="/assets/icons/changePassword.svg" alt="" />
              <p className="ps-4">Change Password</p>
            </Link> */}
            <Link
              href={"/"}
              onClick={handleLogout}
              className="flex no-underline	 p-3 ps-4 text-black"
            >
              <img src="/assets/icons/logout.svg" alt="" />
              <p className="ps-4 ">Logout</p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default TopIcons;