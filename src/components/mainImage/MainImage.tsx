import React from "react";
import Image from "next/image";

const MainImage = () => {
  return (
    <div className="relative w-full h-48 md:h-64 lg:h-72">
      <Image
        src="/assets/images/bg-sidebar-mobile.svg"
        alt="Background sidebar for mobile"
        layout="fill"
        className="absolute top-0 left-0 block md:hidden"
        objectFit="cover"
      />
    </div>
  );
};

export default MainImage;
