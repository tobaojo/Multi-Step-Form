import React from "react";
import OptionButton from "../OptionButton/OptionButton";

const SelectPlan = () => {
  const optionDetails = [
    {
      imgPath: "/assets/images/icon-arcade.svg",
      label: "Arcade",
      plan: {
        monthly: "$9/mo",
        yearly: "$90/yr",
      },
      calculation: "2 months free",
    },
    {
      imgPath: "/assets/images/icon-advanced.svg",
      label: "Advanced",
      plan: {
        monthly: "$12/mo",
        yearly: "$120/yr",
      },
      calculation: "2 months free",
    },
    {
      imgPath: "/assets/images/icon-pro.svg",
      label: "Pro",
      plan: {
        monthly: "$15/mo",
        yearly: "$150/yr",
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
            return <OptionButton key={index} option={option} />;
          })}
        </div>
      </form>
    </div>
  );
};

export default SelectPlan;
