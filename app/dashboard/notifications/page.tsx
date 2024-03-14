import React from "react";
import NotificationCard from "../components/cards/info-cards/NotificationCard";

const Notification = () => {
  // Generate an array of 5 different notifications with different types
  const notifications = [
    {
      id: 1,
      title: "Notification 1",
      message: "This is the first notification.",
      type: "warning",
    },
    {
      id: 2,
      title: "Notification 2",
      message: "This is the second notification.",
      type: "error",
    },
    {
      id: 3,
      title: "Notification 3",
      message: "This is the third notification.",
      type: "default",
    },
    {
      id: 4,
      title: "Notification 4",
      message: "This is the fourth notification.",
      type: "warning",
    },
    {
      id: 5,
      title: "Notification 5",
      message: "This is the fifth notification.",
      type: "error",
    },
  ];

  // Define an array of colors to choose from
  const colors = [
    "from-blue-500 to-violet-500",
    "from-green-600 to-lime-500",
    "from-slate-600 to-slate-300",
    "from-emerald-500 to-teal-400",
    "from-red-600 to-rose-400",
    "from-orange-500 to-yellow-400",
    "from-blue-600 to-cyan-400",
    "from-gray-400 to-gray-100",
    "from-zinc-800 to-zinc-700",
  ];

  const borderColors = [
    "border-blue-300",
    "border-lime-300",
    "border-slate-100",
    "border-emerald-300",
    "border-red-300",
    "border-orange-100",
    "border-cyan-200",
    "border-slate-100",
    "border-slate-100",
  ];

  return (
    <div className="flex flex-wrap -mx-3">
      <div className="w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-8/12">
        <div className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 shadow-xl dark:bg-gray-950 dark:shadow-xl rounded-2xl bg-clip-border">
          <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4">
            <h5 className="mb-0 dark:text-white">Alerts</h5>
          </div>
          <div className="flex-auto p-4 pb-0">
            {/* Render each notification card */}
            {notifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                message={notification.message}
                backgroundColor={`bg-gradient-to-tl ${
                  colors[notification.id % colors.length]
                }`} // Choose a color based on the index
                borderColors={`${
                  borderColors[notification.id % colors.length]
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
