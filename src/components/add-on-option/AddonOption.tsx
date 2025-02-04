import React from "react";
import { Addon } from "@/types";

const AddonOption = ({ addon, onHandleChange, checked, index }: { addon: Addon, onHandleChange: (position: number, addon?: Addon)=>void, checked: boolean[], index: number }) => {
  
  return (
    <label htmlFor={addon.type} className="flex p-2 border border-lightGray" onClick={()=> onHandleChange(index, addon)}>
      <input type="checkbox" name={addon.type} id="" value={addon.type} checked={checked[index]} onChange={()=> onHandleChange(index, addon)}/>
      {addon.type}
    </label>
  );
};

export default AddonOption;
