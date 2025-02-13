"use client";

import Link from "next/link";

const NavLinks = ({ currentStep }: { currentStep: string }) => {
  return (
    <div className="p-6 absolute top-5 space-x-6 self-center">
      <Link
        href={"/1"}
        className={`rounded-full border border-white p-3 py-2 text-white font-semibold ${
          parseInt(currentStep) === 1 ? `bg-pastelBlue text-black` : ``
        }`}
      >
        1
      </Link>
      <Link
        href={"/2"}
        className={`rounded-full border border-white p-3 py-2 text-white font-semibold ${
          parseInt(currentStep) === 2 ? `bg-pastelBlue text-black` : ``
        }`}
      >
        2
      </Link>
      <Link
        href={"/3"}
        className={`rounded-full border border-white p-3 py-2 text-white font-semibold ${
          parseInt(currentStep) === 3 ? `bg-pastelBlue text-black` : ``
        }`}
      >
        3
      </Link>
      <Link
        href={"/4"}
        className={`rounded-full border border-white p-3 py-2 text-white font-semibold ${
          parseInt(currentStep) === 4 ? `bg-pastelBlue text-black` : ``
        }`}
      >
        4
      </Link>
    </div>
  );
};

export default NavLinks;
