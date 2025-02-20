"use client";
import { useFormContext } from "../context/FormProvider";
const PersonalInfo = () => {
  const { formData, updateForm, formError } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateForm("personalInfo", { [name]: value });
  };

  return (
    <div className="flex flex-col space-y-6 w-full">
      <h1 className="font-bold text-marineBlue text-[25px]">Personal Info</h1>
      <p className="text-coolGray leading-6 font-medium">
        Please provide your name, email address and phone number.
      </p>
      <form className="flex flex-col space-y-4">
        <div className="w-full md:mt-10">
          <div className="flex justify-between">
            <label htmlFor="name" className="text-marineBlue">
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
            className={`border border-lightGray px-4 py-2 rounded-md w-full text-purplishBlue ${
              formError?.includes("name") && `border-red-500`
            }`}
          />
        </div>
        <div>
          <div className="flex justify-between">
            <label htmlFor="email" className="text-marineBlue">
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
            className={`border border-lightGray px-4 py-2 rounded-md w-full text-purplishBlue ${
              formError?.includes("email") && `border-red-500`
            }`}
          />
        </div>
        <div>
          <div className="flex justify-between">
            <label htmlFor="number" className="text-marineBlue">
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
            value={formData.personalInfo.phone}
            onChange={handleChange}
            placeholder="e.g. +1 234 567 890"
            className={`border border-lightGray px-4 py-2 rounded-md w-full text-purplishBlue ${
              formError?.includes("phone") && `border-red-500`
            }`}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
