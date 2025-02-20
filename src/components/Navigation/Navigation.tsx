"use client";
import { useRouter } from "next/navigation";
import { validateFormData } from "@/utils/utils";
import { useFormContext } from "../context/FormProvider";
import NextButton from "../Buttons/NextButton";
import PrevButton from "../Buttons/PrevButton";

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

    router.push(`/${next}`);
  };

  const prevPage = () => {
    const prev = parseInt(currentStep) - 1;
    if (parseInt(currentStep) > 1) {
      router.push(`/${prev}`);
    }
  };

  return (
    <div className="fixed bottom-0 flex flex-row justify-between bg-white right-0 p-4 w-full md:absolute md:justify-evenly md:bg-transparent md:top-[30rem] md:left-[10rem] md:h-[13%] md:flex">
      <PrevButton currentStep={currentStep} prevPage={prevPage} />
      <NextButton currentStep={currentStep} nextPage={nextPage} />
    </div>
  );
};

export default Navigation;
