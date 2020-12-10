import React from "react";
import fb from "../assets/fb.svg";
import insta from "../assets/instagram.svg";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <ul>
          <li>NEWS</li>
          <li>PRESS</li>
          <li>FAQ</li>
          <li>DOWNLOAD</li>
        </ul>
        <ul>
          <li>
            <img src={insta} alt="instagram" />
            <img src={fb} alt="fb" />
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p className="copy-p">
          <span>&copy;</span> ELITE SRL | REG.IMPR.PD/C.F./P.I. INTRASTAT IT 04342350289 -
          PRIVACY POLICY
        </p>
        <p className="author">S.T</p>
      </div>
    </div>
  );
};
