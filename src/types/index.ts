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
};

export type Addon = {
  type: string;
  monthlyCost: string;
  yearlyCost: string;
  description: string;
};

export type FormData = {
  personalInfo: PersonalInfo;
  plan: Plan;
};

export type FormContextType = {
  formData: FormData;
  updateForm: (
    step: keyof FormData,
    data: Partial<FormData[keyof FormData]>,
  ) => void;
};
