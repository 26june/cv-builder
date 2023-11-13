import React from "react";

export default function NameForm({ nextStep }) {
  function handleSubmit(event) {
    event.preventDefault();
    nextStep();
  }

  return (
    <div className="formContainer">
      <form className="centreForm" onSubmit={handleSubmit} id="nameForm">
        <label htmlFor="cvInput">Name</label>
        <input name="cvName" type="text" id="cvInput" />
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
