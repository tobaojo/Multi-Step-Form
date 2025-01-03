import React from "react";
import { Addon } from "@/types";

const AddonOption = ({ addon }: { addon: Addon }) => {
  return (
    <label htmlFor={addon.type} className="flex p-2 border border-lightGray">
      <input type="checkbox" name={addon.type} id="" />
      {addon.type}
    </label>
  );
};

export default AddonOption;
