import React from "react";

export default function EndForm({ setCurrentCV }) {
  function handleReturn() {
    setCurrentCV((current) => {
      return { current, step: 1 };
    });
  }

  return (
    <div className="formContainer">
      <button onClick={handleReturn}>Reset</button>
    </div>
  );
}
