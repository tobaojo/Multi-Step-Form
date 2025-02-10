"use client";
import React, { useState, useEffect } from "react";
import { useFormContext } from "../context/FormProvider";
import { Addon } from "@/types";
import AddonOption from "../add-on-option/AddonOption";
import { getpriceValue } from "@/utils/utils";

const addonDetails: Addon[] = [
  {
    type: "Online Service",
    description: "Access to multiplayer games",
    monthlyCost: "+$1/mo",
    yearlyCost: "+$10/yr",
  },
  {
    type: "Larger Storage",
    description: "Extra 1TB of cloud save",
    monthlyCost: "+$2/mo",
    yearlyCost: "+$20/yr",
  },
  {
    type: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyCost: "+$2/mo",
    yearlyCost: "+$20/yr",
  },
];

const Addons = () => {
  const [checked, setIsChecked] = useState(
    new Array(addonDetails.length).fill(false),
  );
  const [addons, setAddons] = useState<Addon[]>([]);
  const [addonsAndPrice, setAddonsAndPrice] = useState({});
  const { formData, updateForm } = useFormContext();

  useEffect(() => {
    const res = addons.reduce((sum, currentState) => {
      if (currentState) {
        if (formData.plan.monthlyCost) {
          sum += getpriceValue(currentState?.monthlyCost);
        } else {
          sum += getpriceValue(currentState?.yearlyCost);
        }
      }
      return sum;
    }, 0);
    setAddonsAndPrice({ addons, price: res });
  }, [addons]);

  useEffect(() => {
    updateForm("addons", addonsAndPrice);
  }, [addonsAndPrice]);

  const onBoxChange = (position: number, addonItem: Addon) => {
    const updatedCheckedState = checked.map((value, index) => {
      if (index === position) {
        if (!value === true) {
          setAddons([...addons, addonItem]);
        } else if (!value === false) {
          setAddons(
            addons.filter((item) => {
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
console.log(checked)

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
            formData={formData}
          />
        );
      })}
    </div>
  );
};

export default Addons;
