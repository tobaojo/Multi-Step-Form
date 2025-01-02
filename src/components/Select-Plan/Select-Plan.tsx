"use client";
import React from "react";
import OptionButton from "../OptionButton/OptionButton";
import { OptionType } from "@/types";
import { useFormContext } from "../context/FormProvider";

const SelectPlan = () => {
  const { formData, updateForm } = useFormContext();
  const handleClick = (option: OptionType) => {
    console.log({ plan: { label: option.label, type: option.plan.type } });
  };
  const optionDetails = [
    {
      imgPath: "/assets/images/icon-arcade.svg",
      label: "Arcade",
      plan: {
        label: "Arcade",
        type: "$9/mo",
        cost: "$90/yr",
      },
      calculation: "2 months free",
    },
    {
      imgPath: "/assets/images/icon-advanced.svg",
      label: "Advanced",
      plan: {
        label: "Advanced",
        type: "$12/mo",
        cost: "$120/yr",
      },
      calculation: "2 months free",
    },
    {
      imgPath: "/assets/images/icon-pro.svg",
      label: "Pro",
      plan: {
        label: "Pro",
        type: "$15/mo",
        cost: "$150/yr",
      },
      calculation: "2 months free",
    },
  ];
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="font-bold text-marineBlue text-[25px]">Select Plan</h1>
      <p className="text-coolGray leading-6 font-medium">
        You have the option of monthly or yearly billing.
      </p>
      <form action="" className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-4">
          {optionDetails.map((option, index) => {
            return (
              <OptionButton
                key={index}
                option={option}
                onHandleClick={handleClick}
              />
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default SelectPlan;
