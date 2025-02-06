import { notFound } from "next/navigation";
import PersonalInfo from "@/components/personal-info/Personal-Info";
import Card from "@/components/card/Card";
import Navigation from "@/components/Navigation/Navigation";
import SelectPlan from "@/components/Select-Plan/Select-Plan";
import Addons from "@/components/add-ons/Addons";
import FinishingUp from "@/components/finishingUp/FinishingUp";

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
          <div className="mx-auto flex flex-col">
            <Card>
              <PersonalInfo />
            </Card>
            <Navigation currentStep={step} />
          </div>
        );
      case "2":
        return (
          <div className="mx-auto flex flex-col">
            <Card>
              <SelectPlan />
            </Card>
            <Navigation currentStep={step} />
          </div>
        );
      case "3":
        return (
          <div className="mx-auto flex flex-col">
            <Card>
              <Addons />
            </Card>
            <Navigation currentStep={step} />
          </div>
        );
      case "4":
        return (
          <div className="mx-auto flex flex-col">
            <Card>
              <FinishingUp />
            </Card>
            <Navigation currentStep={step} />
          </div>
        );
      case "5":
        return <h1>Step 5: Confirmation</h1>;
      default:
        // Show 404 for invalid steps
        notFound();
    }
  };

  return <div>{renderContent()}</div>;
}
