import React from "react";
import down from "../assets/down.svg";
import "../styles/downButton.css";

export const DownButton = ({ onClick }) => {
  return (
    <div className="down-button-container">
      <div className="down-button" onClick={onClick}>
        <img src={down} alt="down" />
      </div>
    </div>
  );
};
