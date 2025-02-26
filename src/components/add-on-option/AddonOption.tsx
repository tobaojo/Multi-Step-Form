import React from "react";
import { Addon, FormData } from "@/types";

const AddonOption = ({
  addon,
  formData,
  onHandleChange,
  index,
}: {
  addon: Addon;
  onHandleChange: (position: number, addonItem: Addon) => void;
  checked?: boolean[];
  formData: FormData;
  index: number;
}) => {
  return (
    <label className="flex flex-row border-2 border-lightGray px-4 py-3 rounded-md w-[90%] space-x-6 justify-between items-center hover:border-purplishBlue hover:bg-magnolia">
      <div className="flex flex-row space-x-7">
        <input
          type="checkbox"
          name={addon.type}
          className="w-[1.5rem] rounded-lg bg-purplishBlue"
          value={addon.type}
          checked={formData.addons.addons.some((a) => a.type === addon.type)}
          onChange={() => onHandleChange(index, addon)}
        />
        <div className="px-0 mx-0 self-center align-middle">
          <p className="font-medium text-marineBlue">{addon.type}</p>
          <p className="text-sm text-coolGray">{addon.description}</p>
        </div>
      </div>

      <div className="px-0 mx-0 self-center align-middle ml-auto">
        <p className="text-[1rem] text-purplishBlue">
          {formData.type.yearly ? addon.yearlyCost : addon.monthlyCost}
        </p>
      </div>
    </label>
  );
};

export default AddonOption;
