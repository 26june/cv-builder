import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function ContactForm({
  nextStep,
  prevStep,
  currentCV,
  setCurrentCV,
}) {
  const [currentEmail, setCurrentEmail] = useState(currentCV.email || "");
  const [currentPhone, setCurrentPhone] = useState(currentCV.phone || "");

  function handleSubmit(event) {
    event.preventDefault();
    setCurrentCV((current) => {
      return {
        ...current,
        email: currentEmail,
        phone: currentPhone,
      };
    });
    nextStep();
  }

  return (
    <div className="formContainer">
      <button className="prevButton" onClick={prevStep}>
        Prev
      </button>

      <form className="centreForm" onSubmit={handleSubmit} id="contactForm">
        <TextField
          autoComplete="off"
          spellCheck="false"
          id="email"
          label="Email"
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
          value={currentEmail}
          onChange={(e) => setCurrentEmail(e.target.value)}
        />

        <TextField
          autoComplete="off"
          spellCheck="false"
          id="phone"
          label="Phone Number"
          required
          variant="standard"
          InputProps={{ sx: { fontSize: "7vh", height: "10vh" } }}
          InputLabelProps={{
            sx: {
              fontSize: "7vh",
              "&.MuiInputLabel-shrink": { top: -50 },
            },
            required: false,
          }}
          sx={{ width: "50%" }}
          value={currentPhone}
          onChange={(e) => setCurrentPhone(e.target.value)}
        />
      </form>
      <input
        className="nextButton"
        type="submit"
        value="Next"
        form="contactForm"
      />
    </div>
  );
}
