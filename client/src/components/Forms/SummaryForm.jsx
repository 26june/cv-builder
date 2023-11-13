import React from "react";

export default function SummaryForm({ nextStep, prevStep }) {
  function handleSubmit(event) {
    event.preventDefault();
    nextStep();
  }

  return (
    <div className="formContainer">
      <button className="prevButton" onClick={prevStep}>
        Prev
      </button>
      <form className="centreForm" id="summaryForm" onSubmit={handleSubmit}>
        <label htmlFor="summaryInput">Summary</label>
        <input name="cvSummary" type="text" id="summaryInput" />
      </form>
      <input
        className="nextButton"
        type="submit"
        value="Next"
        form="summaryForm"
      />
    </div>
  );
}
