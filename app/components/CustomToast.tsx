import React, { useState, useEffect } from "react";
import { Toast, toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

interface CustomToastProps {
  title: string;
  message: string;
  icon: IconDefinition;
  iconColor: string;
  bgColor: string;
  notificationTime: Date;
  t: Toast;
}

const CustomToast: React.FC<CustomToastProps> = ({
  title,
  message,
  icon,
  iconColor,
  bgColor,
  notificationTime,
  t,
}) => {
  const [elapsedTime, setElapsedTime] = useState("Just now");

  useEffect(() => {
    const updateElapsedTime = () => {
      const currentTime = new Date();
      const timeDifference = Math.floor(
        (currentTime.getTime() - notificationTime.getTime()) / 1000
      ); // Time difference in seconds

      if (timeDifference < 60) {
        setElapsedTime("Just now");
      } else if (timeDifference < 3600) {
        setElapsedTime(`${Math.floor(timeDifference / 60)} minutes ago`);
      } else if (timeDifference < 86400) {
        setElapsedTime(`${Math.floor(timeDifference / 3600)} hours ago`);
      } else {
        setElapsedTime(
          notificationTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
      }
    };

    // Set initial elapsed time
    updateElapsedTime();

    // Update elapsed time every minute
    const interval = setInterval(updateElapsedTime, 60000);

    // Cleanup interval
    return () => clearInterval(interval);
  }, [notificationTime]);

  return (
    <div
      className={`max-w-full p-2 text-sm transition-opacity duration-150 ease-linear bg-white border-0 rounded-lg shadow-2xl pointer-events-auto w-[22rem] bg-clip-padding`}
      id="limeToast"
    >
      <div
        className={`flex items-center p-3 rounded-t-lg bg-clip-padding ${bgColor}`}
      >
        <FontAwesomeIcon
          icon={icon}
          className={`mr-2 leading-none ${iconColor} text-xl`}
        />
        <span className="mr-auto font-semibold text-slate-800">{title}</span>
        <span className="text-slate-500">{elapsedTime}</span>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="ml-4 cursor-pointer hover:text-red-500"
        >
          <FontAwesomeIcon
            icon={faTimes}
            aria-hidden="true"
            className="text-slate-500 text-lg"
          />
        </button>
      </div>
      <hr className="h-px m-0 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
      <div className="p-3 break-words text-slate-600">{message}</div>
    </div>
  );
};

// Success toast
const showSuccessToast = (title: string, message: string) => {
  const notificationTime = new Date();
  toast.custom((t) => (
    <CustomToast
      title={title}
      message={message}
      icon={faCheckCircle}
      iconColor="text-lime-500"
      bgColor="bg-green-100"
      notificationTime={notificationTime}
      t={t}
    />
  ));
};

// Error toast
const showErrorToast = (title: string, message: string) => {
  const notificationTime = new Date();
  toast.custom((t) => (
    <CustomToast
      title={title}
      message={message}
      icon={faTimes}
      iconColor="text-red-500"
      bgColor="bg-red-100"
      notificationTime={notificationTime}
      t={t}
    />
  ));
};

// Warning toast
const showWarningToast = (title: string, message: string) => {
  const notificationTime = new Date();
  toast.custom((t) => (
    <CustomToast
      title={title}
      message={message}
      icon={faExclamationTriangle}
      iconColor="text-yellow-500"
      bgColor="bg-yellow-100"
      notificationTime={notificationTime}
      t={t}
    />
  ));
};

// Info toast
const showInfoToast = (title: string, message: string) => {
  const notificationTime = new Date();
  toast.custom((t) => (
    <CustomToast
      title={title}
      message={message}
      icon={faInfoCircle}
      iconColor="text-cyan-500"
      bgColor="bg-cyan-100"
      notificationTime={notificationTime}
      t={t}
    />
  ));
};

export { showSuccessToast, showErrorToast, showWarningToast, showInfoToast };
