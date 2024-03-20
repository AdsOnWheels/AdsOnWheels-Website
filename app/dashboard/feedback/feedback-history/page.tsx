import React from "react";

const FeedbackHistory = () => {
  const feedbackData = [
    {
      id: 1,
      areaOfConcern: "Dashboard",
      icon: "fa-chart-pie",
      feedbackType: "Bug",
      colorCode: "bg-gradient-to-tl from-red-600 to-rose-400",
      feedbackDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 4,
      createdAt: "2024-03-20T10:30:00Z",
    },
    {
      id: 2,
      areaOfConcern: "User Management",
      icon: "fa-user-group",
      feedbackType: "Feature Request",
      colorCode: "bg-gradient-to-tl from-green-600 to-lime-400",
      feedbackDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
      createdAt: "2024-03-19T15:45:00Z",
    },
    {
      id: 3,
      areaOfConcern: "Content Management",
      icon: "fa-paste",
      feedbackType: "General Feedback",
      colorCode: "bg-gradient-to-tl from-blue-600 to-cyan-400",
      feedbackDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 3,
      createdAt: "2024-03-18T09:15:00Z",
    },
    {
      id: 4,
      areaOfConcern: "Forms",
      icon: "fa-clipboard-list",
      feedbackType: "Feature Request",
      colorCode: "bg-gradient-to-tl from-green-600 to-lime-400",
      feedbackDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 2,
      createdAt: "2024-03-17T13:20:00Z",
    },
    {
      id: 5,
      areaOfConcern: "Campaigns",
      icon: "fa-chart-simple",
      feedbackType: "Bug",
      colorCode: "bg-gradient-to-tl from-red-600 to-rose-400",
      feedbackDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 4,
      createdAt: "2024-03-16T08:30:00Z",
    },
    // Add more feedback data as needed
  ];

  return (
    <div className="w-full max-w-full px-3 m-auto flex-0 lg:w-7/12">
      <div className="relative flex flex-col flex-auto min-w-0 p-4 mt-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-xl shadow-xl rounded-2xl bg-clip-border">
        <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
          <h6 className="font-bold dark:text-white">Feedback History</h6>
        </div>
        <div className="flex-auto p-4">
          <div className="relative before:absolute before:left-4 before:top-0 before:h-full before:border-r-2 before:border-solid before:border-slate-100 before:content-[''] lg:before:-ml-px">
            {feedbackData.map((feedback) => (
              <div key={feedback.id} className="relative mb-4">
                <span className="w-6 h-6 rounded-full text-base z-10 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center dark:bg-[#141728] bg-white text-center font-semibold">
                  <i
                    className={`relative text-transparent leading-none fa-solid ${feedback.icon} ${feedback.colorCode} leading-pro z-10 bg-clip-text`}
                  ></i>
                </span>
                <div className="ml-12 pt-1.5 max-w-[30rem] relative -top-1.5 w-auto">
                  <h6 className="mb-0 font-semibold leading-normal text-sm dark:text-white text-slate-700">
                    {feedback.areaOfConcern}
                  </h6>
                  <div className="flex items-center mb-1 space-x-1">
                    <span className="text-xs text-slate-400">Rating:</span>
                    {[...Array(feedback.rating)].map((_, index) => (
                      <i
                        key={index}
                        className="text-md text-yellow-400 fas fa-star"
                      ></i>
                    ))}
                  </div>
                  <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                    {new Date(feedback.createdAt).toLocaleString()}
                  </p>
                  <p className="mt-4 mb-2 leading-normal text-sm text-slate-500">
                    {feedback.feedbackDetails}
                  </p>
                  <span
                    className={`py-1.5 px-3 text-xs rounded-lg ${feedback.colorCode} inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white`}
                  >
                    {feedback.feedbackType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackHistory;
