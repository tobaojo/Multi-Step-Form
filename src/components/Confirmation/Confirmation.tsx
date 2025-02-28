import icon from "../../../public/assets/images/icon-thank-you.svg";
import Image from "next/image";

const Confirmation = () => {
  return (
    <div className="flex flex-col space-y-6 mx-auto align-middle">
      <Image src={icon} alt="thank-you" className="self-center mt-4" />
      <h1 className="font-bold text-marineBlue text-[1.8rem] justify-center text-center">
        Thank you!
      </h1>
      <p className="text-coolGray justify-center text-center text-[1.2rem]">
        Thanks for confirming your prescription!<br></br> We hope you have fun
        using our platform. If you ever need support, please feel free to email
        us at support@loremgaming.com
      </p>
    </div>
  );
};

export default Confirmation;
