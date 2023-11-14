import React, { useState } from "react";
import NameForm from "./Forms/NameForm";
import SkillsForm from "./Forms/SkillsForm";
import SummaryForm from "./Forms/SummaryForm";
import EndForm from "./Forms/EndForm";
import ExperienceForm from "./Forms/ExperienceForm";

export default function CvBuilder() {
  const [currentCV, setCurrentCV] = useState({
    step: 1,
  });

  function nextStep() {
    setCurrentCV((current) => {
      return { ...current, step: current.step + 1 };
    });
  }

  function prevStep() {
    setCurrentCV((current) => {
      return { ...current, step: current.step - 1 };
    });
  }

  switch (currentCV.step) {
    case 1:
      return <NameForm nextStep={nextStep}></NameForm>;

    case 2:
      return (
        <SummaryForm nextStep={nextStep} prevStep={prevStep}></SummaryForm>
      );

    case 3:
      return <SkillsForm nextStep={nextStep} prevStep={prevStep}></SkillsForm>;

    case 4:
      return (
        <ExperienceForm
          nextStep={nextStep}
          prevStep={prevStep}
        ></ExperienceForm>
      );

    default:
      return <EndForm setCurrentCV={setCurrentCV}></EndForm>;
  }
}
