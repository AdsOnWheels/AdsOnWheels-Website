import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  id?: string;
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
  reach: string;
  demographics: string;
}

const AdFormat = ({
  id,
  image,
  alt,
  title,
  description,
  reach,
  demographics,
}: Props) => {
  return (
    <div className="carousel-item flex flex-col items-center justify-center bg-white w-80 h-[30rem] p-6 rounded-lg shadow-md">
      <div
        id={id}
        className="relative w-full h-56 mb-4 rounded-md overflow-hidden"
      >
        <Image
          src={image}
          alt={alt}
          layout="fill"
          objectFit="cover"
          objectPosition={
            title === "Wheel Rim Cover Ads" ? "center bottom" : "center top"
          }
          className="rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <p className="text-gray-500 mt-2">{`Potential Reach: ${reach}`}</p>
      <p className="text-gray-500">{`Demographics: ${demographics}`}</p>
    </div>
  );
};

export default AdFormat;
