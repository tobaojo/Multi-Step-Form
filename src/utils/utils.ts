import { FormData, PersonalInfo } from "@/types";

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

export const total = (formData: FormData) => {
  if (!formData?.plan) {
    return "0";
  }
  let planCost;
  let monthly;
  const addonsCost = formData.addons.price;
  if (formData?.plan?.monthlyCost) {
    planCost = getpriceValue(formData.plan.monthlyCost);
    monthly = true;
  } else {
    planCost = getpriceValue(formData.plan.yearlyCost);
    monthly = false;
  }

  const totalCost = addonsCost + planCost;

  const result = addTextToValue(totalCost, monthly);
  return result;
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
