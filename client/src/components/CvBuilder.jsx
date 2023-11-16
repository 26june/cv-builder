import React, { useState } from "react";
import NameForm from "./Forms/NameForm";
import SkillsForm from "./Forms/SkillsForm";
import SummaryForm from "./Forms/SummaryForm";
import EndForm from "./Forms/EndForm";
import ExperienceForm from "./Forms/ExperienceForm";
import EducationForm from "./Forms/EducationForm";
import PreviousJobForm from "./Forms/PreviousJobForm";
import ContactForm from "./Forms/ContactForm";

export default function CvBuilder() {
  const [currentStep, stepCurrentStep] = useState({
    step: 1,
  });

  const [currentCV, setCurrentCV] = useState({});

  function nextStep() {
    stepCurrentStep((current) => {
      return { ...current, step: currentStep.step + 1 };
    });
  }

  function prevStep() {
    stepCurrentStep((current) => {
      return { ...current, step: currentStep.step - 1 };
    });
  }

  switch (currentStep.step) {
    case 1:
      return (
        <NameForm
          nextStep={nextStep}
          currentCV={currentCV}
          setCurrentCV={setCurrentCV}
        ></NameForm>
      );

    case 2:
      return (
        <PreviousJobForm
          nextStep={nextStep}
          prevStep={prevStep}
          currentCV={currentCV}
          setCurrentCV={setCurrentCV}
        ></PreviousJobForm>
      );

    case 3:
      return (
        <ContactForm
          nextStep={nextStep}
          prevStep={prevStep}
          currentCV={currentCV}
          setCurrentCV={setCurrentCV}
        ></ContactForm>
      );
    case 4:
      return (
        <SummaryForm
          nextStep={nextStep}
          prevStep={prevStep}
          currentCV={currentCV}
          setCurrentCV={setCurrentCV}
        ></SummaryForm>
      );

    case 5:
      return (
        <SkillsForm
          nextStep={nextStep}
          prevStep={prevStep}
          currentCV={currentCV}
          setCurrentCV={setCurrentCV}
        ></SkillsForm>
      );

    case 6:
      return (
        <ExperienceForm
          nextStep={nextStep}
          prevStep={prevStep}
          currentCV={currentCV}
          setCurrentCV={setCurrentCV}
        ></ExperienceForm>
      );

    case 7:
      return (
        <EducationForm
          nextStep={nextStep}
          prevStep={prevStep}
          currentCV={currentCV}
          setCurrentCV={setCurrentCV}
        ></EducationForm>
      );

    default:
      return (
        <EndForm
          stepCurrentStep={stepCurrentStep}
          currentCV={currentCV}
        ></EndForm>
      );
  }
}
