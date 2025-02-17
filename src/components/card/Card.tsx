import React, { ReactNode } from "react";
import MainImageDesktop from "../mainImage/MainImageDesktop";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <>
      <div className="bg-white rounded-lg w-[89%] self-center h-auto flex flex-col p-6 absolute top-20 md:flex-row md:w-[1024px]">
        <MainImageDesktop />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Card;
