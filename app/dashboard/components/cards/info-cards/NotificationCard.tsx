import React from "react";

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
  return (
    <div
      className={`relative p-4 pr-12 mb-4 text-white border border-solid ${borderColors} rounded-lg ${backgroundColor}`}
    >
      <p className="font-semibold text-white">
        {message} Give it a click if you like.
      </p>
      <button
        alert-close=""
        type="button"
        className="box-content absolute top-0 right-0 w-4 h-4 p-4 text-sm text-white bg-transparent border-0 rounded z-50"
      >
        <span aria-hidden="true" className="text-center cursor-pointer">
          ✕
        </span>
      </button>
    </div>
  );
};

export default NotificationCard;
