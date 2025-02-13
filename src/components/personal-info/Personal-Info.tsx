"use client";
import { useFormContext } from "../context/FormProvider";
const PersonalInfo = () => {
  const { formData, updateForm, formError } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateForm("personalInfo", { [name]: value });
  };

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="font-bold text-marineBlue text-[25px]">Personal Info</h1>
      <p className="text-coolGray leading-6 font-medium">
        Please provide your name, email address and phone number.
      </p>
      <form className="flex flex-col space-y-4">
        <div>
          <label htmlFor="name" className="text-marineBlue">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.personalInfo.name}
            onChange={handleChange}
            placeholder="e.g. Stephen King"
            className="border border-lightGray px-4 py-2 rounded-md w-full text-purplishBlue"
          />
          {!formData.personalInfo.name && (
            <small className="text-red-500">
              {formError?.includes("name") && "Name is required"}
            </small>
          )}
        </div>
        <div>
          <label htmlFor="email" className="text-marineBlue">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.personalInfo.email}
            onChange={handleChange}
            placeholder="e.g. stephenking@lorem.com"
            className="border border-lightGray px-4 py-2 rounded-md w-full"
          />
          {!formData.personalInfo.email && (
            <small className="text-red-500">
              {formError?.includes("email") && "Email is required"}
            </small>
          )}
        </div>
        <div>
          <label htmlFor="number" className="text-marineBlue">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={formData.personalInfo.phone}
            onChange={handleChange}
            placeholder="e.g. +1 234 567 890"
            className="border border-lightGray px-4 py-2 rounded-md w-full"
          />
          {!formData.personalInfo.phone && (
            <small className="text-red-500">
              {formError?.includes("phone") && "Phone is required"}
            </small>
          )}
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
