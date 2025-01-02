"use client";
import React from "react";
import Image from "next/image";
import { OptionType } from "@/types";

const OptionButton = ({ option }: { option: OptionType }) => {
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    option: OptionType,
  ) => {
    e.preventDefault();
    console.log(option.label);
    console.log(option.plan);
  };
  return (
    <button
      className="flex flex-row border-2 border-lightGray px-4 py-3 rounded-md w-full space-x-4 hover:border-purplishBlue hover:bg-magnolia"
      onClick={(e) => handleClick(e, option)}
    >
      <Image
        src={option.imgPath}
        alt="Background sidebar for mobile"
        width={50}
        height={50}
      />
      <div className="flex flex-col justify-evenly items-center self-center text-center">
        <h2 className="font-bold text-marineBlue self-center">
          {option.label}
        </h2>
        <p className="text-coolGray font-medium">{option.plan.monthly}</p>
      </div>
    </button>
  );
};

export default OptionButton;
