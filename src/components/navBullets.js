import React from "react";
import "../styles/navBullets.css";
import { Styler } from "./styler";

export const NavBullets = ({ activeIndex, onChange }) => {
  return (
    <div className="nav-bullets-container">
      <div className="nav-bullets">
        {[0, 1, 2, 3].map(item => {
          return (
            <div
              onClick={() => onChange(item)}
              key={item}
              className={`nav-bullet ${
                item === activeIndex ? "active-bullet" : ""
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
