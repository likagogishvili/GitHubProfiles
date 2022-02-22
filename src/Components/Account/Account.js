import React from "react";
import "./Account.css";

function Account(props) {
  const page = props.userData.page + "";
  return (
    <div>
      <h1>Your Github Account</h1>
      <div className="output">
        <img src={props.userData.img} alt="" />
        <a
          className="name"
          href={page}
          target="_blank"
          rel="noreferrer noopener"
        >
          {props.userData.account}
        </a>
      </div>
    </div>
  );
}

export default Account;
