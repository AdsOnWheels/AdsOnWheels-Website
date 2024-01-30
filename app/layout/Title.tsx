import React from "react";

type Props = {
  id?: string;
  title: string;
  className?: string;
};

const Title = ({ id, title, className }: Props) => {
  const pageTitleClasses = `mb-6 ${className || ""}`;
  const titleClasses = ` ${className || ""}`;

  return (
    <div className={pageTitleClasses}>
      <h1 id={id} className={titleClasses}>
        {title}
      </h1>
    </div>
  );
};

export default Title;
