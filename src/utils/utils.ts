import { FormData } from "@/types";

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
  console.log(result);
  return result;
};

export const validateFormData = (formData: FormData, key: string) => {
  for (const [index, value] of Object.entries(formData[key])) {
    if (!value) {
      // maybe return an array of errors?
      console.log(`${index} is empty`)
      return `${index} is empty`;
    }
  }
  return null
};
