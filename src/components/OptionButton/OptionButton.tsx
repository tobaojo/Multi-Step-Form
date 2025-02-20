"use client";
import React from "react";
import Image from "next/image";
import { OptionType } from "@/types";

type OptionButtonType = {
  onHandleClick: (option: OptionType) => void;
  option: OptionType;
  toggle: boolean;
  nextButtonRef: React.RefObject<HTMLButtonElement>;
  isFocused: boolean;
};

const OptionButton = ({
  option,
  onHandleClick,
  toggle,
  nextButtonRef,
  isFocused,
}: OptionButtonType) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onHandleClick(option);
  };

  return (
    <button
      className={`flex flex-row border-2 border-lightGray px-4 py-3 rounded-md w-full h-full self-center md:flex-col hover:border-purplishBlue hover:bg-magnolia ${
        isFocused ? "border-purplishBlue" : "border-lightGray"
      }`}
      onClick={handleClick}
      ref={nextButtonRef}
      data-index={option.label}
    >
      <Image
        src={option.imgPath}
        alt="Background sidebar for mobile"
        width={50}
        height={50}
      />
      <div className="flex flex-col justify-evenly items-center self-center text-center">
        <h2 className="font-bold text-marineBlue self-center">
          {option.plan.type}
        </h2>
        <p className="text-coolGray font-medium">
          {toggle ? option.plan.yearlyCost : option.plan.monthlyCost}
        </p>
      </div>
    </button>
  );
};

export default OptionButton;
