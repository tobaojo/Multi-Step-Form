"use client";
import React, { useState } from "react";
import { Addon } from "@/types";
import AddonOption from "../add-on-option/AddonOption";

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

const Addons = () => {
  const [checked, setIsChecked] = useState(
    new Array(addonDetails.length).fill(false),
  );
  const [totalPrice, setTotalPrice] = useState([]);

  const onBoxChange = (position: number, addonItem) => {
    const updatedCheckedState = checked.map((value, index) => {
      if (index === position) {
        if (!value === true) {
          setTotalPrice([...totalPrice, addonItem]);
        } else if (!value === false) {
          setTotalPrice(
            totalPrice.filter((item) => {
              return item.type !== addonItem.type;
            }),
          );
        }
        return !value;
      }
      return value;
    });
    setIsChecked(updatedCheckedState);
  };

  const getpriceValue = (priceStr) => {
    const match = priceStr.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const addonPrice = totalPrice.reduce((sum, currentState) => {
    if (currentState) {
      sum +=
        getpriceValue(currentState.yearlyCost) ||
        getpriceValue(currentState.monthlyCost);
    }
    return sum;
  }, 0);
console.log(addonPrice)
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="font-bold text-marineBlue text-[25px]">Pick add-ons</h1>
      <p className="text-coolGray leading-6 font-medium">
        Add-ons help enhance your gaming experience.
      </p>
      {addonDetails.map((addon, index) => {
        return (
          <AddonOption
            key={addon.type}
            addon={addon}
            index={index}
            onHandleChange={onBoxChange}
            checked={checked}
          />
        );
      })}
    </div>
  );
};

export default Addons;
