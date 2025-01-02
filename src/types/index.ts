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
  monthly: string;
  yearly: string;
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
