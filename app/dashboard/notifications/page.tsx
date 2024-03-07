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
      id: 4,
      title: "Notification 5",
      message: "This is the fifth notification.",
      type: "error",
    },
  ];

  // Define an array of colors to choose from
  const colors = [
    "from-blue-500 to-violet-500",
    "from-green-500 to-blue-500",
    "from-yellow-500 to-red-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-yellow-500",
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
                headingType={notification.type} // Pass the type of heading
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
