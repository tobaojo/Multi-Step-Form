"use client";
import { notFound } from "next/navigation";
import PersonalInfo from "@/components/personal-info/Personal-Info";
import Card from "@/components/card/Card";
import Navigation from "@/components/Navigation/Navigation";
import SelectPlan from "@/components/Select-Plan/Select-Plan";
import Addons from "@/components/add-ons/Addons";
import FinishingUp from "@/components/finishingUp/FinishingUp";
import Confirmation from "@/components/Confirmation/Confirmation";
import NavLinks from "@/components/Navlinks/NavLinks";

type StepPageType = {
  params: {
    step: string;
  };
};

export default function StepPage({ params }: StepPageType) {
  const { step } = params;

  const renderContent = () => {
    switch (step) {
      case "1":
        return (
          <div className="mx-auto flex flex-col space-y-2">
            <Card>
              <NavLinks currentStep={step} />
              <PersonalInfo />
              <Navigation currentStep={step} />
            </Card>
          </div>
        );
      case "2":
        return (
          <div className="mx-auto flex flex-col space-y-2">
            <NavLinks currentStep={step} />
            <Card>
              <SelectPlan />
              <Navigation currentStep={step} />
            </Card>
          </div>
        );
      case "3":
        return (
          <div className="mx-auto flex flex-col space-y-2">
            <NavLinks currentStep={step} />
            <Card>
              <Addons />
              <Navigation currentStep={step} />
            </Card>
          </div>
        );
      case "4":
        return (
          <div className="mx-auto flex flex-col space-y-2">
            <NavLinks currentStep={step} />
            <Card>
              <FinishingUp />
              <Navigation currentStep={step} />
            </Card>
          </div>
        );
      case "5":
        return (
          <div className="mx-auto flex flex-col">
            <Card>
              <Confirmation />
            </Card>
          </div>
        );
      default:
        // Show 404 for invalid steps
        notFound();
    }
  };

  return <div>{renderContent()}</div>;
}
