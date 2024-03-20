"use client";

import Link from "next/link";
import React, { useState } from "react";

import EditUserProfile from "./EditUserProfile";

const ProfileInformation = () => {
  const [editUserInfo, setEditUserInfo] = useState(false);

  const handleEditUserInfo = () => {
    setEditUserInfo(!editUserInfo);
  };

  return (
    <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12">
      <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-xl shadow-xl rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
          <div className="flex flex-wrap -mx-3">
            <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
              <h6 className="mb-0 dark:text-white">Profile Information</h6>
            </div>
            <div className="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
              <button
                data-target="tooltip_trigger"
                onClick={handleEditUserInfo}
              >
                <i
                  className="leading-normal fas fa-user-edit text-sm text-slate-400 dark:text-white dark:opacity-80"
                  aria-hidden="true"
                ></i>
              </button>
              <div
                className="hidden px-2 py-1 text-center text-white absolute inset-0 mx-0 transform translate-x-1102.5 -translate-y-270 bg-black rounded-lg text-sm"
                id="tooltip"
                data-popper-placement="top"
              >
                Edit Profile
                <div
                  className="invisible absolute h-2 w-2 left-0 transform translate-x-0 translate-y-0 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                  data-popper-arrow=""
                ></div>
              </div>
            </div>
          </div>
        </div>
        {editUserInfo ? (
          <EditUserProfile
            editUserInfo={editUserInfo}
            setEditUserInfo={setEditUserInfo}
          />
        ) : (
          <div className="flex-auto p-4">
            <p className="leading-normal text-sm dark:text-white dark:opacity-60">
              Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer
              is no. If two equally difficult paths, choose the one more painful
              in the short term (pain avoidance is creating an illusion of
              equality).
            </p>
            <hr className="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
              <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal border-0 rounded-t-lg text-sm text-inherit">
                <strong className="text-slate-700 dark:text-white">
                  Full Name:
                </strong>{" "}
                &nbsp; Alec M. Thompson
              </li>
              <li className="relative block px-4 py-2 pl-0 leading-normal border-0 border-t-0 text-sm text-inherit">
                <strong className="text-slate-700 dark:text-white">
                  Mobile:
                </strong>{" "}
                &nbsp; (44) 123 1234 123
              </li>
              <li className="relative block px-4 py-2 pl-0 leading-normal border-0 border-t-0 text-sm text-inherit">
                <strong className="text-slate-700 dark:text-white">
                  Email:
                </strong>{" "}
                &nbsp; alecthompson@mail.com
              </li>
              <li className="relative block px-4 py-2 pl-0 leading-normal border-0 border-t-0 text-sm text-inherit">
                <strong className="text-slate-700 dark:text-white">
                  Location:
                </strong>{" "}
                &nbsp; USA
              </li>
              <li className="relative block px-4 py-2 pb-0 pl-0 border-0 border-t-0 rounded-b-lg text-inherit">
                <strong className="leading-normal text-sm text-slate-700 dark:text-white">
                  Social:
                </strong>{" "}
                &nbsp;
                <Link
                  className="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center text-blue-800 align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-none"
                  href="#"
                >
                  <i className="fab fa-facebook fa-lg" aria-hidden="true"></i>
                </Link>
                <Link
                  className="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-none text-sky-600"
                  href="#"
                >
                  <i className="fab fa-twitter fa-lg" aria-hidden="true"></i>
                </Link>
                <Link
                  className="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-none text-sky-900"
                  href="#"
                >
                  <i className="fab fa-instagram fa-lg" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInformation;
