import React from "react";
import Image from "next/image";

import PlaceHolderImage from "../../assets/images/Brand-icon.png";

const UserProfile = () => {
  return (
    <>
      <div className="flex-none w-auto max-w-full px-3">
        <div className="relative inline-flex items-center justify-center text-base text-white transition-all duration-200 ease-in-out h-[62px w-[62px] rounded-xl">
          <Image
            src={PlaceHolderImage}
            width={100}
            height={100}
            alt="profile_image"
            className="w-full shadow-sm rounded-xl"
          />
        </div>
      </div>
      <div className="flex-none w-auto max-w-full px-3 my-auto">
        <div className="h-full">
          <h5 className="mb-1 dark:text-white">John Doe</h5>
          <p className="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60">
            CEO / Co-Founder
          </p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
