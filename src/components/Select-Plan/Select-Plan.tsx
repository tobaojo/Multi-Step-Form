"use client";
import React, { useRef, useState, useEffect } from "react";
import OptionButton from "../OptionButton/OptionButton";
import { OptionType } from "@/types";
import { useFormContext } from "../context/FormProvider";
import CostToggle from "../costToggle/CostToggle";

const SelectPlan = () => {
  const { formData, updateForm, formError } = useFormContext();
  const [toggle, setToggle] = useState(false);
  const [updatedPlan, setUpdatedPlan] = useState<OptionType | null>(null);
  const buttonRef1 = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);
  const buttonRef3 = useRef<HTMLButtonElement>(null);
  const buttonRefs = [buttonRef1, buttonRef2, buttonRef3];

  console.log(formError);

  useEffect(() => {
    const newPlan = {
      ...updatedPlan?.plan,
      monthlyCost: toggle ? "" : updatedPlan?.plan?.monthlyCost,
      yearlyCost: toggle ? updatedPlan?.plan?.yearlyCost : "",
    };
    updateForm("plan", newPlan);
  }, [toggle]);

  const handleOnChange = () => {
    setToggle((prev) => !prev);
  };

  const handleClick = (option: OptionType, index: number) => {
    setUpdatedPlan(option);
    const newPlan = {
      type: option.plan.type,
      monthlyCost: toggle ? "" : option.plan.monthlyCost,
      yearlyCost: toggle ? option.plan.yearlyCost : "",
      index,
    };

    updateForm("plan", newPlan);
  };

  const optionDetails = [
    {
      imgPath: "/assets/images/icon-arcade.svg",
      label: "Arcade",
      plan: {
        type: "Arcade",
        monthlyCost: "$9/mo",
        yearlyCost: "$90/yr",
        index: 0,
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
        index: 1,
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
        index: 2,
      },
      calculation: "2 months free",
    },
  ];
  return (
    <div className="flex flex-col space-y-6 w-full">
      <h1 className="font-bold text-marineBlue text-[25px]">Select Plan</h1>
      <p className="text-coolGray leading-6 font-medium">
        You have the option of monthly or yearly billing.
      </p>
      <form action="" className="flex flex-col space-y-4">
        {formError?.includes("yearlyCost") &&
          formError?.includes("monthlyCost") && (
            <small>please select an option</small>
          )}
        <div className="flex flex-col space-y-4 md:flex-row md:h-[12rem] md:space-x-10 md:align-middle md:justify-center md:space-y-0 md:mt-10">
          {optionDetails.map((option, index) => {
            return (
              <OptionButton
                key={index}
                option={option}
                onHandleClick={() => handleClick(option, index)}
                toggle={toggle}
                nextButtonRef={buttonRefs[index]}
                isFocused={formData?.plan.index === index}
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
