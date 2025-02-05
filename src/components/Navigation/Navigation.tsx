"use client";
import { useRouter } from "next/navigation";

const Navigation = ({ currentStep }: { currentStep: string }) => {
  const router = useRouter();

  const nextPage = () => {
    const next = parseInt(currentStep) + 1;
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
        className="bg-marineBlue text-White p-4 rounded-md hover:opacity-85"
        onClick={nextPage}
      >
        Next Step
      </button>
    </div>
  );
};

export default Navigation;
