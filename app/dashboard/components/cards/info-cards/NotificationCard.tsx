"use client";

import React, { useState } from "react";

import DismissButton from "@/app/dashboard/notifications/components/DismissButton";
import LearnMoreButton from "@/app/dashboard/notifications/components/LearnMoreButton";
import ViewButton from "@/app/dashboard/notifications/components/ViewButton";

interface Props {
  message: string;
  backgroundColor: string;
  borderColors: string;
}

const NotificationCard = ({
  message,
  backgroundColor,
  borderColors,
}: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`relative p-4 pr-12 mb-4 text-white border border-solid ${borderColors} rounded-lg ${backgroundColor}`}
      onClick={() => setExpanded(!expanded)}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <p className="font-semibold text-white">
        {message} Give it a click if you like.
      </p>
      {expanded && (
        <div className="flex justify-end mt-2">
          <ViewButton />
          <LearnMoreButton />
        </div>
      )}
      <DismissButton />
    </div>
  );
};

export default NotificationCard;
