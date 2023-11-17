import React from "react";
import axios from "axios";

export default function EndForm({ stepCurrentStep, currentCV }) {
  function handleReturn() {
    stepCurrentStep((current) => {
      return { ...current, step: 1 };
    });
  }

  async function handleGenerateCV() {
    await axios.post("http://localhost:8080/cvs", currentCV);

    stepCurrentStep((current) => {
      return { ...current, step: 1 };
    });

    console.log(currentCV);
  }

  const renderCVProperties = (data) => {
    return Object.entries(data).map(([key, value]) => (
      <div key={key}>
        <strong>{key}:</strong>
        {typeof value === "object" ? renderCVProperties(value) : value}
      </div>
    ));
  };

  return (
    <div className="formContainer">
      <div className="centreEndButtons">
        <button onClick={handleReturn}>Reset</button>
        <button onClick={handleGenerateCV}>Generate CV!</button>
      </div>

      <div className="cvPreview">
        <h2>CV Preview</h2>
        {renderCVProperties(currentCV)}
      </div>
    </div>
  );
}
