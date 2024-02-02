import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description?: string;
  image?: string;
  actions?: React.ReactNode;
  className?: string;
}

const Card = ({
  title,
  description,
  image,
  actions,
  className = "",
}: Props) => {
  return (
    <div className={`bg-white rounded-lg shadow ${className}`}>
      {image && <Image src={image} alt={title} className="rounded-t-lg" />}
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && <p className="text-sm">{description}</p>}
        {actions && <div className="mt-4">{actions}</div>}
      </div>
    </div>
  );
};

export default Card;
