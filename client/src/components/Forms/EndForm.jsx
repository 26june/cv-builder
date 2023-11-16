import React from "react";

export default function EndForm({ setCurrentCV }) {
  function handleReturn() {
    setCurrentCV((current) => {
      return { current, step: 1 };
    });
  }

  function handleGenerateCV() {
    //TODO
  }

  return (
    <div className="formContainer">
      <div className="centreEndButtons">
        <button onClick={handleReturn}>Reset</button>
        <button onClick={handleGenerateCV}>Generate CV!</button>
      </div>
    </div>
  );
}
