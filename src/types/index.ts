import { Dispatch, SetStateAction } from "react";

export type OptionType = {
  imgPath: string;
  label: string;
  plan: Plan;
  calculation: string;
};

export type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
};

export type Plan = {
  type: string;
  monthlyCost: string;
  yearlyCost: string;
  index: number | null;
};

export type Addon = {
  type: string;
  monthlyCost: string;
  yearlyCost: string;
  description: string;
};

export type FormData = {
  personalInfo: PersonalInfo;
  type: { yearly: boolean };
  plan: Plan;
  addons: {
    addons: Addon[];
    price: number;
  };
};

export type FormContextType = {
  formError: string[] | null;
  setFormError: Dispatch<SetStateAction<string[] | null>>;
  formData: FormData;
  updateForm: (
    step: keyof FormData,
    data: Partial<FormData[keyof FormData]>,
  ) => void;
};
