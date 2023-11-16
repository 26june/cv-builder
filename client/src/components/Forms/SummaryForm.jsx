import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function SummaryForm({
  nextStep,
  prevStep,
  currentCV,
  setCurrentCV,
}) {
  const [currentSummary, setCurrentSummary] = useState(currentCV.summary || "");

  function handleSubmit(event) {
    event.preventDefault();

    setCurrentCV((current) => {
      return { ...current, summary: currentSummary };
    });
    nextStep();
  }

  return (
    <div className="formContainer">
      <button className="prevButton" onClick={prevStep}>
        Prev
      </button>
      <form className="centreForm" id="summaryForm" onSubmit={handleSubmit}>
        <TextField
          id="standard-multiline-static"
          label="Summary"
          multiline
          rows={5}
          required
          variant="outlined"
          InputProps={{ style: { fontSize: "5vh" } }}
          InputLabelProps={{
            sx: {
              fontSize: "5vh",
              "&.MuiInputLabel-shrink": { top: -15 },
            },
            required: false,
          }}
          sx={{ width: "50%" }}
          value={currentSummary}
          onChange={(e) => setCurrentSummary(e.target.value)}
        />
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
