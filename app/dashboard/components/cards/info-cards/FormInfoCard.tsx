import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const FormInfoCard = ({ title, children }: Props) => {
  return (
    <div className="flex flex-wrap mt-6 -mx-3">
      <div className="w-full max-w-full px-3 m-auto flex-0 lg:w-8/12">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-xl dark:bg-gray-950 dark:shadow-xl rounded-2xl bg-clip-border">
          <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
            <h6 className="dark:text-white">{title}</h6>
          </div>
          <div className="flex-auto p-0 pb-2">
            <div className="w-full overflow-x-auto align-top border-gray-200 text-slate-500 ps">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormInfoCard;
