import React from "react";
import ErrorHandler from '../ErrorHandler/ErrorHandler'
import "./UserInput.css";

function UserInput(props) {
  function submit() {
    if (props.username.trim().length === 0) {
      props.setError({
        title: "Empty Input Error",
        message: "Input Is Empty",
      });
    }
    if (props.symbols.includes(props.username)) {
      props.setError({
        title: "Error Invalid Input!",
        message: "Only Symbol Was Entered",
      });
    }
    if (props.username.includes(" ")) {
      props.setError({
        title: "Space Was Included!",
        message: "Username Should Not Conatin Spaces",
      });
    }
    props.fetchAccountsHandler();
    props.setUsername("");
  }
  function onDismiss() {
    props.setError(null);
  }
  return (
    <div>
      {props.error && (
        <ErrorHandler
          onDismiss={onDismiss}
          title={props.error.title}
          message={props.error.message}
        />
      )}
      <div className="form">
        <input
          id="username"
          type="text"
          value={props.username}
          placeholder="Enter Github Username"
          onChange={(event) => props.setUsername(event.target.value)}
        />
        <button onClick={submit}>Search</button>
      </div>
    </div>
  );
}

export default UserInput;
