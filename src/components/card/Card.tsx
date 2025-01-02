import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <>
      <div className="bg-white rounded-lg w-[89%] self-center h-auto flex flex-col p-6 absolute top-20">
        {children}
      </div>
    </>
  );
};

export default Card;
