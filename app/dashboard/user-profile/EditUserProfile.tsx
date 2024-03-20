"use client";

import React, { useState } from "react";

interface Props {
  editUserInfo: boolean;
  setEditUserInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditUserProfile = ({ editUserInfo, setEditUserInfo }: Props) => {
  const [bio, setBio] = useState(
    `Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).`
  );
  const [fullName, setFullName] = useState("Alec M. Thompson");
  const [mobile, setMobile] = useState("(44) 123 1234 123");
  const [email, setEmail] = useState("alecthompson@mail.com");
  const [location, setLocation] = useState("USA");

  const handleSave = () => {
    // Save the edited profile information
    // You can implement the logic to update the user's profile here
    console.log("Saving profile changes...");
  };

  const handleCancel = () => {
    setEditUserInfo(!editUserInfo);
    // Reset form fields to their original values
    setBio(
      `Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).`
    );
    setFullName("Alec M. Thompson");
    setMobile("(44) 123 1234 123");
    setEmail("alecthompson@mail.com");
    setLocation("USA");
  };

  return (
    <div className="flex-auto p-4">
      <form onSubmit={handleSave}>
        <div className="mb-2">
          <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">
            Bio:
          </label>
          <textarea
            name="Bio"
            rows={4}
            defaultValue={bio}
            className="mt-1 p-2 min-h-unset sm:w-full text-xs focus:shadow-primary-outline dark:bg-slate-950 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-2/5 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none sm:mt-0 sm:ml-auto"
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="mb-2">
          <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">
            Full Name:
          </label>
          <input
            type="text"
            defaultValue={fullName}
            className="mt-1 p-2 min-h-unset sm:w-full text-xs focus:shadow-primary-outline dark:bg-slate-950 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-2/5 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none sm:mt-0 sm:ml-auto"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">
            Mobile:
          </label>
          <input
            type="text"
            defaultValue={mobile}
            className="mt-1 p-2 min-h-unset sm:w-full text-xs focus:shadow-primary-outline dark:bg-slate-950 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-2/5 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none sm:mt-0 sm:ml-auto"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">
            Email:
          </label>
          <input
            type="email"
            defaultValue={email}
            className="mt-1 p-2 min-h-unset sm:w-full text-xs focus:shadow-primary-outline dark:bg-slate-950 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-2/5 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none sm:mt-0 sm:ml-auto"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">
            Location:
          </label>
          <input
            type="text"
            defaultValue={location}
            className="mt-1 p-2 min-h-unset sm:w-full text-xs focus:shadow-primary-outline dark:bg-slate-950 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-2/5 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none sm:mt-0 sm:ml-auto"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="inline-block px-8 py-2 m-0 text-xs font-bold leading-normal text-center text-gray-700 bg-gray-300 hover:bg-gray-400 align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer tracking-tight hover:-translate-y-px active:opacity-85"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-block px-8 py-2 m-0 text-xs font-bold leading-normal text-right text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 tracking-tight bg-gradient-to-tl from-blue-600 to-sky-600 hover:bg-blue-600 hover:-translate-y-px active:opacity-85"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserProfile;
