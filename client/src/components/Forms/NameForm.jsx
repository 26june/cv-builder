import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Slide from "@mui/material/Slide";
import CSSTransition from "react-transition-group/CSSTransition";

export default function NameForm({ nextStep, visibleBool }) {
  function handleSubmit(event) {
    event.preventDefault();
    // event.target[0].value //Set state to this
    nextStep();
  }

  return (
    // <CSSTransition in={visibleBool} timeout={5000} classNames="formAnim">
    <Slide direction="left" in={visibleBool} mountOnEnter unmountOnExit>
      <div className={`formContainer`}>
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
    </Slide>
    // </CSSTransition>
  );
}
