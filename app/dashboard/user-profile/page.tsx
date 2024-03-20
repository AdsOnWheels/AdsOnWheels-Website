"use client";

import React from "react";
import ActionPanel from "../layout/ActionPanel";

import ProfileInformation from "./ProfileInformation";
import MultiFactorAuth from "./MultiFactorAuth";
import UserSessions from "./UserSessions";
import ToDoList from "./todo-progress/ToDoList";
import ProgressCharts from "./todo-progress/ProgressCharts";
import Accounts from "./Accounts";

const UserProfile = () => {
  const userProfile = true;

  return (
    <>
      <ActionPanel userProfile={userProfile} />

      {/* User Profile Information */}
      <div className="flex flex-wrap -mx-3">
        <ProfileInformation />

        {/* Multi-factor Authentication Section */}
        <MultiFactorAuth />

        {/* Sessions Section */}
        <UserSessions />
      </div>

      {/* TO-DO Table and Progress Report */}
      <div className="flex flex-wrap mt-6 -mx-3">
        <ToDoList />
        <ProgressCharts />
      </div>

      {/* Accounts Section*/}
      <Accounts />
    </>
  );
};

export default UserProfile;
