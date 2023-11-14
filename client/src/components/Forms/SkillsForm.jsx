import { TextField } from "@mui/material";
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
        <TextField
          autoComplete="off"
          spellCheck="false"
          id="outlined-basic"
          label="Skills"
          variant="standard"
          InputProps={{ sx: { fontSize: "7vh", height: "10vh" } }}
          InputLabelProps={{
            sx: {
              fontSize: "7vh",
              "&.MuiInputLabel-shrink": { top: -50 },
            },
          }}
          sx={{ width: "50%" }}
        />
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
