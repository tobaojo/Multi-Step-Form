import React from "react";

const NextButton = ({
  currentStep,
  nextPage,
}: {
  currentStep: string;
  nextPage: () => void;
}) => {
  return (
    <button
      className={`bg-marineBlue text-White p-4 rounded-md hover:opacity-85 ${
        parseInt(currentStep) === 4 ? `bg-purplishBlue` : ``
      }`}
      onClick={nextPage}
    >
      {parseInt(currentStep) === 4 ? "Confirm" : " Next Step"}
    </button>
  );
};

export default NextButton;
