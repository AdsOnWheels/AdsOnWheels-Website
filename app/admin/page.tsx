"use client";

import React, { useState } from "react";
import Image from "next/image";

import BackgroundImage from "./assets/images/Amsterdam-city-scene.png";
import SignIn from "./layout/authentication/sign-in/SignIn";
import ResetPassword from "./layout/authentication/reset-password/ResetPassword";
import MFAVerification from "./layout/authentication/mfa-verification/MFAVerification";

const AdminPortal = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthenticationSuccess = () => {
    setAuthenticated(true);
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
  };

  return (
    <div className="max-h-screen-90 flex flex-wrap items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundImage}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background"
        />
        <div className="absolute inset-0 bg-opacity-20 backdrop-blur-sm bg-black"></div>
      </div>
      {/* Pass callback function to SignIn component */}
      {!authenticated && !forgotPassword && (
        <SignIn
          onForgotPassword={handleForgotPassword}
          onAuthenticationSuccess={handleAuthenticationSuccess}
        />
      )}
      {forgotPassword && <ResetPassword />}
      {authenticated && <MFAVerification />}
    </div>
  );
};

export default AdminPortal;
