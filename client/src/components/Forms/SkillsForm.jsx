import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function SkillsForm({ nextStep, prevStep }) {
  const [skillsArray, setSkillsArray] = useState([]);
  const [skillsInput, setSkillsInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    nextStep();
  }

  function handleAddSkill() {
    if (skillsInput == "") {
      return;
    }

    setSkillsArray([...skillsArray, skillsInput]);
    setSkillsInput("");
  }

  function handleDeleteSkill(skill) {
    setSkillsArray(skillsArray.filter((e) => e !== skill));
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
          sx={{ width: "40%" }}
          value={skillsInput}
          onChange={(e) => setSkillsInput(e.target.value)}
        />
        <Button
          variant="outlined"
          sx={{ height: "12vh", marginLeft: "1vw", width: "10%" }}
          onClick={handleAddSkill}
        >
          Add
        </Button>
      </form>

      {skillsArray.map((skill, index) => {
        return (
          <div key={index}>
            {skill}
            <Button
              onClick={() => {
                handleDeleteSkill(skill);
              }}
            >
              X
            </Button>
          </div>
        );
      })}

      <input
        className="nextButton"
        type="submit"
        value="Next"
        form="skillsForm"
      />
    </div>
  );
}
