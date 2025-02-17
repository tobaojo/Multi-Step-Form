import React from "react";

const PrevButton = ({
  currentStep,
  prevPage,
}: {
  currentStep: string;
  prevPage: () => void;
}) => {
  return (
    <button
      className={`text-coolGray font-medium ${
        parseInt(currentStep) === 1 ? "opacity-0" : ""
      }`}
      onClick={prevPage}
    >
      Go Back
    </button>
  );
};

export default PrevButton;
