import React from "react";
import Image from "next/image";

const MainImageDesktop = () => {
  return (
    <Image
      src="/assets/images/bg-sidebar-desktop.svg"
      alt="Background sidebar for desktop"
      layout="intrinsic"
      width={300}
      height={0}
      className="relative hidden left-0 md:block mr-10"
    />
  );
};

export default MainImageDesktop;
