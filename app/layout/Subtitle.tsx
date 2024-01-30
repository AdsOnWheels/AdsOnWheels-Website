import React from "react";

type Props = {
  subTitle: string;
  className?: string;
};

const Subtitle = ({ subTitle, className }: Props) => {
  const pageSubTitleClasses = `mb-4 ${className || ""}`;
  const subTitleClasses = `${className || ""}`;

  return (
    <div className={pageSubTitleClasses}>
      <h2 className={subTitleClasses}>{subTitle}</h2>
    </div>
  );
};

export default Subtitle;
