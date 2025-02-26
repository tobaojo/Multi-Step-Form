"use client";
import Link from "next/link";
import { useFormContext } from "../context/FormProvider";
import { total } from "../../utils/utils";

const FinishingUp = () => {
  const { formData } = useFormContext();
  return (
    <div className="flex flex-col space-y-4 md:space-y-3 w-full m-5 md:m-10">
      <h1 className="font-bold text-marineBlue text-2xl md:text-[2rem] tracking-tight">
        Finishing up
      </h1>
      <p className="text-coolGray font-medium text-base w-[20rem] md:w-[32rem]">
        Double-check everything looks OK before confirming.
      </p>
      <div className="flex flex-col w-[90%] bg-magnolia p-6 rounded-lg">
        <div className="flex justify-between py-2  border-b">
          <div className="">
            <h3 className="font-semibold text-marineBlue">{`${
              formData?.plan?.type
            }(${formData?.type?.yearly ? `Yearly` : `Monthly`})`}</h3>
            <Link href={"/2"} className="underline">
              Change
            </Link>
          </div>

          <span className="font-bold text-marineBlue">
            {formData?.type?.yearly
              ? formData?.plan?.yearlyCost
              : formData?.plan?.monthlyCost}
          </span>
        </div>
        <div>
          {formData?.addons?.addons?.length === 0 ? (
            <p>No Addons selected</p>
          ) : (
            <ul>
              {formData?.addons?.addons?.map((addon) => (
                <li key={addon?.type}>
                  <div className="flex justify-between py-2">
                    <span className="text-coolGray">{addon?.type}</span>
                    <span className="text-coolGray">
                      {formData?.type?.yearly
                        ? addon?.yearlyCost
                        : addon?.monthlyCost}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex justify-between py-2 w-[90%]">
        <span className="text-coolGray">
          `Total {formData?.type?.yearly ? `(Yearly)` : `(Monthly)`}
        </span>
        <span className="text-purplishBlue font-semibold">
          +{total(formData, formData.type.yearly)}
        </span>
      </div>
    </div>
  );
};

export default FinishingUp;
