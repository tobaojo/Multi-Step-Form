"use client";
import Link from "next/link";
import { useFormContext } from "../context/FormProvider";
import { total } from "../../utils/utils";

const FinishingUp = () => {
  const { formData } = useFormContext();

  return (
    <div className="flex flex-col space-y-6 w-full">
      <h1 className="font-bold text-marineBlue text-[25px]">Finishing up</h1>
      <p className="text-coolGray leading-1 font-small text-[1.1rem] mt-0">
        Double-check everything looks OK before confirming.
      </p>
      <div className="flex flex-col w-full bg-magnolia p-6 rounded-lg self-center">
        <div className="flex justify-between py-2  border-b">
          <div className="">
            <h3 className="font-semibold text-marineBlue">{`${
              formData?.plan?.type
            }(${formData?.plan?.monthlyCost ? `Monthly` : `Yearly`})`}</h3>
            <Link href={"/2"} className="underline">
              Change
            </Link>
          </div>

          <span className="font-bold text-marineBlue">
            {formData?.plan?.monthlyCost
              ? formData?.plan?.monthlyCost
              : formData?.plan?.yearlyCost}
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
                      {formData?.plan?.monthlyCost
                        ? addon?.monthlyCost
                        : addon?.yearlyCost}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex justify-between py-2">
        <span className="">
          `Total {formData?.plan?.monthlyCost ? `(Monthly)` : `(Yearly)`}
        </span>
        <span className="text-purplishBlue font-semibold">
          {total(formData)}
        </span>
      </div>
    </div>
  );
};

export default FinishingUp;
