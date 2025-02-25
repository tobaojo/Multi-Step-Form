import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <>
      <div className="bg-white rounded-lg w-[90%] self-center items-center mx-auto flex flex-col p-2 absolute top-20 md:flex-row md:w-[64rem]">
        <div className="flex flex-col md:flex-row md:w-full">{children}</div>
      </div>
    </>
  );
};

export default Card;
