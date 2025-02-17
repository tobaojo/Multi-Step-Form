"use client";

import Link from "next/link";

const NavLinks = ({ currentStep }: { currentStep: string }) => {
  return (
    <div className="flex p-6 fixed top-2 space-x-6 self-center mx-auto align-middle items-center">
      <Link
        href={"/1"}
        className={`rounded-full border border-white px-4 py-[0.50rem] text-white font-semibold ${
          parseInt(currentStep) === 1 ? `bg-pastelBlue text-black` : ``
        }`}
      >
        1
      </Link>
      <Link
        href={"/2"}
        className={`rounded-full border border-white px-4 py-[0.50rem] text-white font-semibold ${
          parseInt(currentStep) === 2 ? `bg-pastelBlue text-black` : ``
        }`}
      >
        2
      </Link>
      <Link
        href={"/3"}
        className={`rounded-full border border-white px-4 py-[0.50rem] text-white font-semibold ${
          parseInt(currentStep) === 3 ? `bg-pastelBlue text-black` : ``
        }`}
      >
        3
      </Link>
      <Link
        href={"/4"}
        className={`rounded-full border border-white px-4 py-[0.50rem] text-white font-semibold ${
          parseInt(currentStep) === 4 ? `bg-pastelBlue text-black` : ``
        }`}
      >
        4
      </Link>
    </div>
  );
};

export default NavLinks;
