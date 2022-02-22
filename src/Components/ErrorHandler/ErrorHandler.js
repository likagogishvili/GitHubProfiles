import React from "react";
import "./ErrorHandler.css";
function ErrorHandler(props) {
  return (
    <div>
      <div className="backdrop" onClick={props.onDismiss} />
      <div className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <button onClick={props.onDismiss}>Okay</button>
        </footer>
      </div>
    </div>
  );
}

export default ErrorHandler;
