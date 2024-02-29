import React from "react";

interface Props {
  children: React.ReactNode;
}

const CardWithButtons = ({ children }: Props) => {
  return (
    <div className="flex flex-wrap mt-12 -mx-3">
      <div className="w-full max-w-full px-3 ml-auto text-right flex-0 lg:w-8/12">
        {children}
      </div>
    </div>
  );
};

export default CardWithButtons;
