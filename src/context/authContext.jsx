"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [role, setRole] = useState("Consumer");
  const [email, setEmail] = useState("");
  const [practitionerDetails, setPractitionerDetails] = useState(false);
  const [profileDetail, setProfileDetail] = useState("");
  const [refetchFromLocalStorage, setRefetchFromLocalStorage] = useState(false);
  const [editNftData, setEditNftData] = useState(null);
  const [headshot, setHeadshot] = useState("head");
  const [editPractitionerNftData, setEditPractitionerNftData] = useState(null);
  const [otpResetPassword, setOtpResetPassword] = useState(false);
  const [emailPswdReset, setEmailPswdReset] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(null);
  const [dataResync, setDataResync] = useState(false);
  const [videoPopup, setVideoPopup] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        headshot,
        setHeadshot,
        profileDetail,
        role,
        setRole,
        email,
        setEmail,
        practitionerDetails,
        setPractitionerDetails,
        refetchFromLocalStorage,
        setRefetchFromLocalStorage,
        setEditNftData,
        editNftData,
        editPractitionerNftData,
        setEditPractitionerNftData,
        otpResetPassword,
        setOtpResetPassword,
        emailPswdReset,
        setEmailPswdReset,
        showVideo,
        setShowVideo,
        isSideBarOpen,
        setIsSideBarOpen,
        dataResync,
        setDataResync,
        videoPopup,
        setVideoPopup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider, useAuthContext };
