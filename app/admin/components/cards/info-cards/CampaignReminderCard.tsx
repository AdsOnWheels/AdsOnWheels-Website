import React from "react";

interface Props {
  title: string;
  description?: string;
  date: string;
}

const CampaignReminderCard = ({ title, description, date }: Props) => {
  return (
    <div className="flex mb-3.5">
      <div>
        <div className="inline-block w-12 h-12 text-center text-black dark:text-white bg-center rounded-lg shadow-none fill-current stroke-none bg-blue-500/3">
          <i className="leading-none text-lg text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500 relative z-1 top-3.5"></i>
        </div>
      </div>
      <div className="ml-4">
        <div>
          <h6 className="mb-1 text-sm leading-normal dark:text-white text-slate-700">
            {title}
          </h6>
          {description && (
            <p className="text-sm leading-normal dark:text-gray-400">
              {description}
            </p>
          )}
          <span className="text-sm leading-normal dark:text-gray-600">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CampaignReminderCard;
