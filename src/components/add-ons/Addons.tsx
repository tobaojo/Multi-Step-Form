"use client";
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
  const { formData, updateForm } = useFormContext();

  const onBoxChange = (index: number, addonItem: Addon) => {
    const currentAddons = formData?.addons?.addons || [];

    const updatedAddons = currentAddons.some((a) => a.type === addonItem.type)
      ? currentAddons.filter((addon) => addon.type !== addonItem.type)
      : [...currentAddons, addonItem];
    const totalPrice = updatedAddons.reduce(
      (sum, addon) =>
        sum +
        (formData.type.yearly
          ? getpriceValue(addon.yearlyCost)
          : getpriceValue(addon.monthlyCost)),
      0,
    );

    updateForm("addons", { addons: updatedAddons, price: totalPrice });
  };
  return (
    <div className="flex flex-col space-y-4 md:space-y-3 w-full m-5 md:m-10">
      <h1 className="font-bold text-marineBlue text-2xl md:text-[2rem] tracking-tight">
        Pick add-ons
      </h1>
      <p className="text-coolGray font-medium text-base w-[20rem] md:w-[32rem]">
        Add-ons help enhance your gaming experience.
      </p>
      {addonDetails.map((addon, index) => {
        return (
          <AddonOption
            key={addon.type}
            addon={addon}
            index={index}
            onHandleChange={onBoxChange}
            formData={formData}
          />
        );
      })}
    </div>
  );
};

export default Addons;
