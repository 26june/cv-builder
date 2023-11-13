import React from "react";

export default function SkillsForm({ nextStep, prevStep }) {
  function handleSubmit(event) {
    event.preventDefault();
    nextStep();
  }

  return (
    <div className="formContainer">
      <button className="prevButton" onClick={prevStep}>
        Prev
      </button>
      <form className="centreForm" id="skillsForm" onSubmit={handleSubmit}>
        <label htmlFor="skillsInput">Skill</label>
        <input name="cvSkills" type="text" id="skillsInput" />
      </form>
      <input
        className="nextButton"
        type="submit"
        value="Next"
        form="skillsForm"
      />
    </div>
  );
}
