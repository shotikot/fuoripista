import React, { useState } from "react";
import { Parallax } from "react-parallax";
import { Text } from "./text";
import {Link} from "react-router-dom";
import underline from "../assets/underline.svg";
import bg from "../assets/third-bg-land.jpg";

export const ThirdSection = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <Parallax
      bgImage={bg}
      bgClassName={`second-section-bg ${hovered ? "third-hovered-bg" : ""}`}
      strength={300}
    >
      <div className="first-section section">
        <div
          className="texts-container"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Text
            paragraphs={[
              { render: () => <>TUO</>, className: "big-text" },
              {
                render: () => (
                  <>
                    Una sulozione fuzionale che
                    <br /> interfeccia performace e <em>jtile</em>
                  </>
                ),
                className: "normal-text",
              },
              {
                render: () => (
                  <Link to="/tuo">
                    SCOPRI TUO
                    <br />
                    <img src={underline} alt="underline" />
                  </Link>
                ),
                className: "small-text",
              },
            ]}
          />
        </div>
      </div>
    </Parallax>
  );
};
