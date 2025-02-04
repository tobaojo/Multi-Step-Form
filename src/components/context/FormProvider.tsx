"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { FormData, FormContextType } from "@/types";

const defaultFormData: FormData = {
  personalInfo: {
    name: "",
    phone: "",
    email: "",
  },
  plan: {
    type: "",
    monthlyCost: "",
    yearlyCost: "",
    index: 0,
  },

};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const updateForm = (
    step: keyof FormData,
    data: Partial<FormData[keyof FormData]>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], ...data },
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateForm }}>
      {children}
    </FormContext.Provider>
  );
};
