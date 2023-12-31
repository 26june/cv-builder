import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

export default function NameForm({ nextStep, currentCV, setCurrentCV }) {
  const [currentName, setCurrentName] = useState(currentCV.name || "");

  function handleSubmit(event) {
    event.preventDefault();
    setCurrentCV((current) => {
      return {
        ...current,
        name: currentName,
      };
    });
    nextStep();
  }

  return (
    <div className="formContainer">
      <form className="centreForm" onSubmit={handleSubmit} id="nameForm">
        <TextField
          required
          autoComplete="off"
          spellCheck="false"
          id="outlined-basic"
          label="Name"
          variant="standard"
          InputProps={{
            sx: { fontSize: "7vh", height: "10vh" },
          }}
          InputLabelProps={{
            sx: {
              fontSize: "7vh",
              "&.MuiInputLabel-shrink": { top: -50 },
            },

            required: false,
          }}
          sx={{ width: "50%" }}
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
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
