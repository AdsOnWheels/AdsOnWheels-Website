import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface ImageProps {
  src: StaticImageData;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  quality?: number;
  alt?: string;
}

interface Props {
  image: ImageProps;
  children: ReactNode;
}

const BgImageContainer = ({ image, children }: Props) => {
  return (
    <div className="min-h-screen flex flex-wrap items-center justify-center overflow-hidden relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image.src}
          layout="fill"
          objectFit={image.objectFit || "cover"}
          quality={image.quality || 100}
          alt={image.alt || "Background"}
        />
        <div className="absolute inset-0 bg-opacity-20 backdrop-blur-sm bg-black"></div>
      </div>
      {children}
    </div>
  );
};

export default BgImageContainer;
