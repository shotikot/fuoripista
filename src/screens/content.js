import React from "react";
import { Catalogue } from "../components/catalogue";
import { Logo } from "../components/logo";
import "../styles/content.css";

const Content = () => {
  return (
    <div className="content-page page">
      <Logo black={true} />
      <Catalogue />
    </div>
  );
};

export default Content;
