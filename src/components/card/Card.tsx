import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <>
      <div className="bg-white rounded-lg w-[85%] self-center items-center mx-auto h-auto flex flex-col p-6 absolute top-20 md:flex-row md:w-[1024px]">
        <div className="md:flex md:flex-row w-full">{children}</div>
      </div>
    </>
  );
};

export default Card;
