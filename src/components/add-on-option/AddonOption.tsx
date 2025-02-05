import React from "react";
import { Addon, FormData } from "@/types";

const AddonOption = ({
  addon,
  formData,
  onHandleChange,
  checked,
  index,
  addonPrice
}: {
  addon: Addon;
  onHandleChange: (position: number, addon?: Addon) => void;
  checked: boolean[];
  formData: FormData
  index: number;
  addonPrice: number,
}) => {
  if(formData.plan.monthlyCost){
    console.log('Monthly')
    console.log(addonPrice)
  } else {
    console.log('yearly')
  }
  return (
    <label
      htmlFor={addon.type}
      className="flex flex-row border-2 border-lightGray px-4 py-3 rounded-md w-full space-x-4 hover:border-purplishBlue hover:bg-magnolia"
      onClick={() => onHandleChange(index, addon)}
    >
      <input
        type="checkbox"
        name={addon.type}
        className="w-[1.5rem] rounded-lg bg-purplishBlue"
        value={addon.type}
        checked={checked[index]}
        onChange={() => onHandleChange(index, addon)}
      />
      <div className="px-0 mx-0 self-center align-middle">
        <p className="font-medium text-marineBlue">{addon.type}</p>
        <p className="text-sm text-coolGray">{addon.description}</p>
      </div>
      <div className="px-0 mx-0 self-center align-middle">
        <p className="text-[1rem] text-purplishBlue">{formData.plan.monthlyCost ? addon.monthlyCost : addon.yearlyCost}</p>
      </div>
    </label>
  );
};

export default AddonOption;
