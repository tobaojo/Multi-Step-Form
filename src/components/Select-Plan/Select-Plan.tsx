"use client";
import React, { useState } from "react";
import OptionButton from "../OptionButton/OptionButton";
import { OptionType } from "@/types";
import { useFormContext } from "../context/FormProvider";
import CostToggle from "../costToggle/CostToggle";

const SelectPlan = () => {
  const { formData, updateForm } = useFormContext();

  const [toggle, setToggle] = useState(false);

  const handleOnChange = () => {
    setToggle((prev) => !prev);
    updateForm("plan", {
      ...formData.plan,
      type: formData.plan.type,
      monthlyCost: !toggle ? "" : formData.plan.monthlyCost,
      yearlyCost: !toggle ? formData.plan.yearlyCost : "",
    });
  };
  const handleClick = (option: OptionType) => {
    updateForm("plan", {
      type: option.plan.type,
      monthlyCost: toggle ? "" : option.plan.monthlyCost,
      yearlyCost: toggle ? option.plan.yearlyCost : "",
    });
  };

  const optionDetails = [
    {
      imgPath: "/assets/images/icon-arcade.svg",
      label: "Arcade",
      plan: {
        type: "Arcade",
        monthlyCost: "$9/mo",
        yearlyCost: "$90/yr",
      },
      calculation: "2 months free",
    },
    {
      imgPath: "/assets/images/icon-advanced.svg",
      label: "Advanced",
      plan: {
        type: "Advanced",
        monthlyCost: "$12/mo",
        yearlyCost: "$120/yr",
      },
      calculation: "2 months free",
    },
    {
      imgPath: "/assets/images/icon-pro.svg",
      label: "Pro",
      plan: {
        type: "Pro",
        monthlyCost: "$15/mo",
        yearlyCost: "$150/yr",
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
                toggle={toggle}
              />
            );
          })}
        </div>
      </form>
      <CostToggle toggle={toggle} onHandleChange={handleOnChange} />
    </div>
  );
};

export default SelectPlan;
