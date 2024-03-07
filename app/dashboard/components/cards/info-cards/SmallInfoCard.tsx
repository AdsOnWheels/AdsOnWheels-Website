import React from "react";

interface Props {
  heading: string;
  children: React.ReactNode;
}

const SmallInfoCard = ({ heading, children }: Props) => {
  return (
    <div className="w-full max-w-full px-3 shrink-0 xl:flex-0 xl:w-3/12">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 mt-6 shrink-0 md:flex-0 md:w-6/12 xl:w-full xl:mt-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-gray-950 dark:shadow-xl rounded-2xl bg-clip-border">
            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
              <h6 className="mb-0 dark:text-white">{heading}</h6>
            </div>
            <div className="flex-auto p-4 mb-4 rounded-xl">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallInfoCard;
