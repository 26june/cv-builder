import React from "react";
import TextField from "@mui/material/TextField";

export default function NameForm({ nextStep }) {
  function handleSubmit(event) {
    event.preventDefault();
    // event.target[0].value //Set state to this
    nextStep();
  }

  return (
    <div className="formContainer">
      <form className="centreForm" onSubmit={handleSubmit} id="nameForm">
        <TextField
          autoComplete="off"
          spellCheck="false"
          id="outlined-basic"
          label="Name"
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
        form="nameForm"
      />
    </div>
  );
}
