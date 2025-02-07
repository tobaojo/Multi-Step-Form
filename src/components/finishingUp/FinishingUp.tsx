"use client";
import Link from "next/link";
import { useFormContext } from "../context/FormProvider";

const FinishingUp = () => {
  const { formData } = useFormContext();
  console.log(formData.addons);
  return (
    <div className='flex flex-col space-y-4"'>
      <h1 className="font-bold text-marineBlue text-[25px]">Finishing up</h1>
      <p className="text-coolGray leading-6 font-medium">
        Double-check everything looks OK before confirming.
      </p>
      <div className="flex flex-col w-full bg-magnolia p-6 rounded-lg self-center">
        <div className="flex justify-between py-2 border border-b-black">
          <div className="">
            <h3 className="font-semibold text-marineBlue">{`${
              formData?.plan?.type
            }(${formData?.plan?.monthlyCost ? `Monthly` : `Yearly`})`}</h3>
            <Link href={""} className="underline">
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
          <ul>
            {formData?.addons?.addons?.map((addon) => (
              <li key={addon?.type}>
                <div className="flex justify-between py-2">
                  <span className="text-coolGray">{addon?.type}</span>{" "}
                  <span className="text-coolGray">{addon?.monthlyCost}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between py-2">
        <span className="">Total</span>
        <span className="text-purplishBlue">{formData.addons.price}</span>
      </div>
    </div>
  );
};

export default FinishingUp;
