const NavLinks = ({ currentStep }: { currentStep: string }) => {
  return (
    <div className="flex p-6 fixed top-2 space-x-6 self-center mx-auto align-middle items-center md:absolute z-10 md:align-middle md:self-start md:flex-col md:space-y-5 md:space-x-0 md:items-start md:top-10">
      <div className="md:flex md:flex-row md:space-x-5 ">
        <div
          className={`rounded-full border border-white  px-4 py-[0.50rem] md:px-2 md:py-[0.20rem] md:h-1/2 text-white font-semibold ${
            parseInt(currentStep) === 1 ? `bg-pastelBlue text-black` : ``
          }`}
        >
          1
        </div>
        <div className="hidden md:inline md:h-1/2">
          <p className="text-white">Step 1</p>
          <p className="text-white font-semibold">Your Info</p>
        </div>
      </div>
      <div className="md:flex md:flex-row md:space-x-5 ">
        <div
          className={`rounded-full border border-white  px-4 py-[0.50rem] md:px-2 md:py-[0.20rem] md:h-1/2 text-white font-semibold ${
            parseInt(currentStep) === 2 ? `bg-pastelBlue text-black` : ``
          }`}
        >
          2
        </div>
        <div className="hidden md:inline md:h-1/2">
          <p className="text-white">Step 2</p>
          <p className="text-white font-semibold">Select Plan</p>
        </div>
      </div>
      <div className="md:flex md:flex-row md:space-x-5 ">
        <div
          className={`rounded-full border border-white  px-4 py-[0.50rem] md:px-2 md:py-[0.20rem] md:h-1/2 text-white font-semibold ${
            parseInt(currentStep) === 3 ? `bg-pastelBlue text-black` : ``
          }`}
        >
          3
        </div>
        <div className="hidden md:inline md:h-1/2">
          <p className="text-white">Step 3</p>
          <p className="text-white font-semibold">Addons</p>
        </div>
      </div>
      <div className="md:flex md:flex-row md:space-x-5 ">
        <div
          className={`rounded-full border border-white  px-4 py-[0.50rem] md:px-2 md:py-[0.20rem] md:h-1/2 text-white font-semibold ${
            parseInt(currentStep) === 4 ? `bg-pastelBlue text-black` : ``
          }`}
        >
          4
        </div>
        <div className="hidden md:inline md:h-1/2">
          <p className="text-white">Step 4</p>
          <p className="text-white font-semibold">Summary</p>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
