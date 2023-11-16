import { TextField } from "@mui/material";
import React from "react";
import Slide from "@mui/material/Slide";

export default function SummaryForm({ nextStep, prevStep, visibleBool }) {
  function handleSubmit(event) {
    event.preventDefault();
    nextStep();
  }

  return (
    <Slide direction="left" in={visibleBool} mountOnEnter unmountOnExit>
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
            variant="outlined"
            InputProps={{ style: { fontSize: "5vh" } }}
            InputLabelProps={{
              sx: {
                fontSize: "5vh",
                "&.MuiInputLabel-shrink": { top: -15 },
              },
            }}
            sx={{ width: "50%" }}
          />
        </form>
        <input
          className="nextButton"
          type="submit"
          value="Next"
          form="summaryForm"
        />
      </div>
    </Slide>
  );
}
