import React from "react";
import { Addon } from "@/types";
import AddonOption from "../add-on-option/AddonOption";

const Addons = () => {
  const addonDetails: Addon[] = [
    {
      type: "Online Service",
      description: "Access to multiplayer games",
      monthlyCost: "+ $1/mo",
      yearlyCost: "+ $10/yr",
    },
    {
      type: "Larger Storage",
      description: "Extra 1TB of cloud save",
      monthlyCost: "+ $2/mo",
      yearlyCost: "+ $20/yr",
    },
    {
      type: "Customizable profile",
      description: "Custom theme on your profile",
      monthlyCost: "+ $2/mo",
      yearlyCost: "+ $20/yr",
    },
  ];
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="font-bold text-marineBlue text-[25px]">Pick add-ons</h1>
      <p className="text-coolGray leading-6 font-medium">
        Add-ons help enhance your gaming experience.
      </p>
      {addonDetails.map((addon) => {
        return <AddonOption key={addon.type} addon={addon} />;
      })}
    </div>
  );
};

export default Addons;
