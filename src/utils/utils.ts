import { Addon, FormData } from "@/types";

export const getpriceValue = (priceStr: string) => {
  if (priceStr) {
    const match = priceStr.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }
  return 0;
};

export const addTextToValue = (priceNum: number, monthly: boolean) => {
  return monthly ? `$${priceNum}/mo` : `${priceNum}/yr`;
};

const calculateAddonsCost = (addon: { addons: Addon[] }, monthly: boolean) => {
  if (monthly) {
    const addonPrice =
      addon?.addons
        ?.map((addon) => getpriceValue(addon.monthlyCost))
        ?.reduce((cur, acc) => {
          acc = acc + cur;
          return acc;
        }, 0) || 0;
    return addonPrice;
  } else {
    const addonPrice =
      addon?.addons
        .map((addon) => getpriceValue(addon.yearlyCost))
        .reduce((cur, acc) => {
          acc = acc + cur;
          return acc;
        }, 0) || 0;
    return addonPrice;
  }
};

export const total = (formData: FormData, type: boolean) => {
  if (!formData?.plan) {
    return "0";
  }
  let planCost;
  let monthly;
  let addonsCost;

  if (type) {
    monthly = false;
    planCost = getpriceValue(formData.plan.yearlyCost);
    addonsCost = calculateAddonsCost(formData.addons, monthly);
    const totalCost = addonsCost + planCost;

    const result = addTextToValue(totalCost, monthly);
    return result;
  } else {
    monthly = true;
    planCost = getpriceValue(formData.plan.monthlyCost);
    addonsCost = calculateAddonsCost(formData.addons, monthly);
    const totalCost = addonsCost + planCost;

    const result = addTextToValue(totalCost, monthly);
    return result;
  }
};

export const validateFormData = (formData: FormData, currentPage: string) => {
  const errors = [];
  let key;
  switch (currentPage) {
    case "1":
      key = "personalInfo";
      for (const [index, value] of Object.entries(formData[key])) {
        if (!value) {
          errors.push(index);
        }
      }
      if (errors.length > 0) {
        return errors;
      } else {
        return null;
      }
    case "2":
      key = "plan";
      for (const [index, value] of Object.entries(formData[key])) {
        if (!value) {
          errors.push(index);
        }
      }
      if (
        errors.length >= 4 ||
        (errors.includes("montlyCost") && errors.includes("yearlyCost"))
      ) {
        return errors;
      } else {
        return null;
      }
    default:
      break;
  }
};

export const isOnlyNumbers = (str: string) => {
  if (str === "" || /^\+?\d*$/.test(str)) {
    return str;
  }
  return "";
};
