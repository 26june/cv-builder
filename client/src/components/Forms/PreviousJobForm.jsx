import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function PreviousJobForm({
  nextStep,
  prevStep,
  currentCV,
  setCurrentCV,
}) {
  const [currentProfile, setCurrentProfile] = useState(currentCV.profile || "");

  function handleSubmit(event) {
    event.preventDefault();

    setCurrentCV((current) => {
      return { ...current, profile: currentProfile };
    });

    nextStep();
  }

  return (
    <div className="formContainer">
      <button className="prevButton" onClick={prevStep}>
        Prev
      </button>

      <form className="centreForm" onSubmit={handleSubmit} id="nameForm">
        <TextField
          autoComplete="off"
          spellCheck="false"
          id="outlined-basic"
          label="Job Title"
          variant="standard"
          required
          InputProps={{ sx: { fontSize: "7vh", height: "10vh" } }}
          InputLabelProps={{
            sx: {
              fontSize: "7vh",
              "&.MuiInputLabel-shrink": { top: -50 },
            },
            required: false,
          }}
          sx={{ width: "50%" }}
          value={currentProfile}
          onChange={(e) => setCurrentProfile(e.target.value)}
        />
      </form>
      <input
        className="nextButton"
        type="submit"
        value="Next"
        form="nameForm"
      />
    </div>
  );
}
