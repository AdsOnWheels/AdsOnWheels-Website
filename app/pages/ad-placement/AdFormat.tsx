import React from "react";
import Image, { StaticImageData } from "next/image";
import Heading2 from "@/app/layout/Heading2";

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
      <div className="text-left">
        <Heading2
          text={title}
          color="dark"
          size="xl"
          align="left"
          margin="mb-4"
        />
        <p className="text-gray-800">{description}</p>
        <p className="text-sm text-gray-400 mt-2">{`Potential Reach: ${reach}`}</p>
        <p className="text-sm text-gray-400">{`Demographics: ${demographics}`}</p>
      </div>
    </div>
  );
};

export default AdFormat;
