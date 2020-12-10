import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/logo.css";

export const Logo = ({ black = false }) => {
  return (
    <div className={`logo-container ${black ? "black-logo" : ""}`}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};
