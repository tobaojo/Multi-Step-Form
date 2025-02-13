"use client";
import { useRouter } from "next/navigation";
import { validateFormData } from "@/utils/utils";
import { useFormContext } from "../context/FormProvider";

const Navigation = ({ currentStep }: { currentStep: string }) => {
  const router = useRouter();
  const { formData, setFormError } = useFormContext();

  const nextPage = () => {
    const next = parseInt(currentStep) + 1;
    const FormErrors = validateFormData(formData, currentStep);

    if (FormErrors) {
      setFormError(FormErrors || null);
      return;
    }

    // if (planErrors) {
    //   setFormError(planErrors || null);
    //   return;
    // }

    router.push(`/${next}`);
  };

  const prevPage = () => {
    const prev = parseInt(currentStep) - 1;
    if (parseInt(currentStep) > 1) {
      router.push(`/${prev}`);
    }
  };

  return (
    <div className="fixed bottom-0 flex flex-row justify-between align-end h-auto bg-white p-4 self-end w-full">
      <button
        className={`text-coolGray font-medium ${
          parseInt(currentStep) === 1 ? "opacity-0" : ""
        }`}
        onClick={prevPage}
      >
        Go Back
      </button>

      <button
        className={`bg-marineBlue text-White p-4 rounded-md hover:opacity-85 ${
          parseInt(currentStep) === 4 ? `bg-purplishBlue` : ``
        }`}
        onClick={nextPage}
      >
        {parseInt(currentStep) === 4 ? "Confirm" : " Next Step"}
      </button>
    </div>
  );
};

export default Navigation;
