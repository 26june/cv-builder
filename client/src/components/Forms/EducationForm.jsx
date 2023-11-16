import React, { useState } from "react";
import dayjs from "dayjs";
import { Button, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";

export default function EducationForm({
  nextStep,
  prevStep,
  currentCV,
  setCurrentCV,
}) {
  const educationDefault = {
    qualification: "",
    insitution: "",
    gradDate: "",
  };
  const [education, setEducation] = useState(educationDefault);
  const [educationArray, setEducationArray] = useState(
    currentCV.education || []
  );

  const { qualification, insitution, gradDate } = education;

  function handleSubmit(event) {
    event.preventDefault();

    setCurrentCV((current) => {
      return { ...current, education: educationArray };
    });
    nextStep();
  }

  function handleAddEducation() {
    setEducationArray([...educationArray, education]);
    setEducation(educationDefault);
  }
  return (
    <div className="formContainer">
      <button className="prevButton" onClick={prevStep}>
        Prev
      </button>
      <form className="centreForm" id="educationForm" onSubmit={handleSubmit}>
        <TextField
          autoComplete="off"
          spellCheck="false"
          id="educationQualifiation"
          label="Qualification"
          variant="standard"
          InputProps={{ sx: { fontSize: "5vh", height: "7vh" } }}
          InputLabelProps={{
            sx: {
              fontSize: "5vh",
              "&.MuiInputLabel-shrink": { top: -30 },
            },
          }}
          sx={{ width: "50%" }}
          value={qualification}
          onChange={(e) =>
            setEducation((current) => {
              return { ...current, qualification: e.target.value };
            })
          }
        />

        <TextField
          autoComplete="off"
          spellCheck="false"
          id="educationInsitution"
          label="Insitution"
          variant="standard"
          InputProps={{ sx: { fontSize: "5vh", height: "7vh" } }}
          InputLabelProps={{
            sx: {
              fontSize: "5vh",
              "&.MuiInputLabel-shrink": { top: -30 },
            },
          }}
          value={insitution}
          onChange={(e) =>
            setEducation((current) => {
              return { ...current, insitution: e.target.value };
            })
          }
          sx={{ width: "50%" }}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div id="dateContainer">
            <DatePicker
              label="Graduation Date"
              value={dayjs(gradDate).format("DD/MM/YYYY")}
              format="DD/MM/YYYY"
              onChange={(newValue) => {
                setEducation((current) => {
                  return {
                    ...current,
                    gradDate: dayjs(newValue).format("DD/MM/YYYY"),
                  };
                });
              }}
            ></DatePicker>
          </div>
        </LocalizationProvider>
        <Button
          variant="outlined"
          sx={{ height: "5vh", width: "50%" }}
          onClick={handleAddEducation}
        >
          Add
        </Button>
      </form>

      <input
        className="nextButton"
        type="submit"
        value="Next"
        form="educationForm"
      />
    </div>
  );
}
