"use client";

import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the current time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Format the time as HH:MM
  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <h4 className="mb-1 text-2xl font-semibold text-slate-500 dark:text-white">
      {formattedTime}
    </h4>
  );
};

export default Clock;
