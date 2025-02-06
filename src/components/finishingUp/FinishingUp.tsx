"use client"
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
      <div className="flex flex-col">
        <div><span>{formData?.plan?.type}</span> 
        <span>{formData?.plan?.monthlyCost? formData?.plan?.monthlyCost : formData?.plan?.yearlyCost}</span></div>
        <div><ul>{formData?.addons?.addons?.map(addon => <li key={addon?.type}><span>{addon?.type}</span> <span>{addon?.monthlyCost}</span></li>)}</ul></div>
        <div><p>Total</p>{formData.addons.price}</div>
      </div>
    </div>
  );
};

export default FinishingUp;
