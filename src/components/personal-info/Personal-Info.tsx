"use client";
import { useFormContext } from "../context/FormProvider";
import { isOnlyNumbers } from "@/utils/utils";

const PersonalInfo = () => {
  const { formData, updateForm, formError } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateForm("personalInfo", { [name]: value });
  };

  return (
    <div className="flex flex-col space-y-4 md:space-y-3 w-full m-5 md:m-10">
      <h1 className="font-bold text-marineBlue text-2xl md:text-[2rem] tracking-tight">
        Personal info
      </h1>
      <p className="text-coolGray font-medium text-base w-[20rem] md:w-[32rem]">
        Please provide your name, email address and phone number.
      </p>
      <form className="flex flex-col space-y-4">
        <div className="w-full md:mt-10 space-y-1">
          <div className="flex justify-between w-[90%] md:w-[80%]">
            <label htmlFor="name" className="font-medium text-marineBlue">
              Name
            </label>
            {!formData.personalInfo.name && (
              <small className="text-red-500 font-semibold">
                {formError?.includes("name") && "This field is required"}
              </small>
            )}
          </div>
          <input
            type="text"
            name="name"
            value={formData.personalInfo.name}
            onChange={handleChange}
            placeholder="e.g. Stephen King"
            className={`border border-lightGray px-4 py-2 rounded-md w-[90%] placeholder:font-medium text-marineBlue ${
              formError?.includes("name") && `border-red-500`
            }`}
          />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between w-[90%] md:w-[80%]">
            <label htmlFor="email" className="font-medium text-marineBlue">
              Email Address
            </label>
            {!formData.personalInfo.email && (
              <small className="text-red-500 font-semibold">
                {formError?.includes("email") && "This field is required"}
              </small>
            )}
          </div>
          <input
            type="email"
            name="email"
            value={formData.personalInfo.email}
            onChange={handleChange}
            placeholder="e.g. stephenking@lorem.com"
            className={`border border-lightGray px-4 py-2 rounded-md w-[90%] text-marineBlue placeholder:font-medium ${
              formError?.includes("email") && `border-red-500`
            }`}
          />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between w-[90%] md:w-[80%]">
            <label htmlFor="number" className="font-medium text-marineBlue">
              Phone Number
            </label>
            {!formData.personalInfo.phone && (
              <small className="text-red-500 font-semibold">
                {formError?.includes("phone") && "This field is required"}
              </small>
            )}
          </div>
          <input
            type="text"
            name="phone"
            value={isOnlyNumbers(formData.personalInfo.phone)}
            onChange={handleChange}
            placeholder="e.g. +1 234 567 890"
            className={`border border-lightGray px-4 py-2 rounded-md w-[90%] placeholder:font-medium text-marineBlue ${
              formError?.includes("phone") && `border-red-500`
            }`}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
