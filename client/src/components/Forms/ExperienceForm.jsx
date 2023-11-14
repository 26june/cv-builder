import React from "react";
import dayjs from "dayjs";
import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";

export default function ExperienceForm({ nextStep, prevStep }) {
    

  function handleSubmit(event) {
    event.preventDefault();
    nextStep();
  }

  function handleAddExperience() {}
  return (
    <div className="formContainer">
      <button className="prevButton" onClick={prevStep}>
        Prev
      </button>
      <form className="centreForm" id="experienceForm" onSubmit={handleSubmit}>
        <TextField
          autoComplete="off"
          spellCheck="false"
          id="outlined-basic"
          label="Experience"
          variant="standard"
          placeholder="Job Title"
          InputProps={{ sx: { fontSize: "5vh", height: "7vh" } }}
          InputLabelProps={{
            sx: {
              fontSize: "5vh",
              "&.MuiInputLabel-shrink": { top: -30 },
            },
          }}
          sx={{ width: "50%" }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div id="dateContainer">
            <DatePicker label="Start"></DatePicker>
            <DatePicker label="End"></DatePicker>
          </div>
        </LocalizationProvider>
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          InputProps={{ style: { fontSize: "4vh" } }}
          InputLabelProps={{
            sx: {
              fontSize: "4vh",
              "&.MuiInputLabel-shrink": { top: -10 },
            },
          }}
          sx={{ width: "50%" }}
        />

        <Button
          variant="outlined"
          sx={{ height: "5vh", width: "50%" }}
          onClick={handleAddExperience}
        >
          Add
        </Button>
      </form>

      <input
        className="nextButton"
        type="submit"
        value="Next"
        form="experienceForm"
      />
    </div>
  );
}
