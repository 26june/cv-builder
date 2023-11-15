import React, { useState } from "react";
import dayjs from "dayjs";
import { Button, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";

export default function ExperienceForm({ nextStep, prevStep }) {
  const experienceDefault = {
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  };
  const [experience, setExperience] = useState(experienceDefault);
  const [experienceArray, setExperienceArray] = useState([]);

  const { title, company, startDate, endDate, description } = experience;

  function handleSubmit(event) {
    event.preventDefault();
    nextStep();
  }

  function handleAddExperience() {
    setExperienceArray([...experienceArray, experience]);
    setExperience(experienceDefault);
  }
  return (
    <div className="formContainer">
      <button className="prevButton" onClick={prevStep}>
        Prev
      </button>
      <form className="centreForm" id="experienceForm" onSubmit={handleSubmit}>
        <div id="experienceHeader">
          <TextField
            autoComplete="off"
            spellCheck="false"
            id="experienceTitle"
            label="Job Title"
            variant="standard"
            InputProps={{ sx: { fontSize: "5vh", height: "7vh" } }}
            InputLabelProps={{
              sx: {
                fontSize: "5vh",
                "&.MuiInputLabel-shrink": { top: -30 },
              },
            }}
            sx={{ width: "45%" }}
            value={title}
            onChange={(e) =>
              setExperience((current) => {
                return { ...current, title: e.target.value };
              })
            }
          />
          @
          <TextField
            autoComplete="off"
            spellCheck="false"
            id="experienceCompany"
            label="Company Name"
            variant="standard"
            InputProps={{ sx: { fontSize: "5vh", height: "7vh" } }}
            InputLabelProps={{
              sx: {
                fontSize: "5vh",
                "&.MuiInputLabel-shrink": { top: -30 },
              },
            }}
            value={company}
            onChange={(e) =>
              setExperience((current) => {
                return { ...current, company: e.target.value };
              })
            }
            sx={{ width: "45%" }}
          />
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div id="dateContainer">
            <DatePicker
              label="Start"
              value={dayjs(startDate).format("DD/MM/YYYY")}
              format="DD/MM/YYYY"
              onChange={(newValue) => {
                setExperience((current) => {
                  return {
                    ...current,
                    startDate: dayjs(newValue).format("DD/MM/YYYY"),
                  };
                });
              }}
            ></DatePicker>
            <DatePicker
              label="End"
              value={dayjs(endDate).format("DD/MM/YYYY")}
              format="DD/MM/YYYY"
              onChange={(newValue) => {
                setExperience((current) => {
                  return {
                    ...current,
                    endDate: dayjs(newValue).format("DD/MM/YYYY"),
                  };
                });
              }}
            ></DatePicker>
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
          value={description}
          onChange={(e) =>
            setExperience((current) => {
              return { ...current, description: e.target.value };
            })
          }
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
