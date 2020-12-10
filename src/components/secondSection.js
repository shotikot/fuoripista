import React, { useState } from "react";
import { Parallax } from "react-parallax";
import { Text } from "./text";
import bg from "../assets/second-bg-land.jpg";
import underline from "../assets/underline.svg";

export const SecondSection = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <Parallax
      bgImage={bg}
      bgClassName={`second-section-bg ${hovered ? "second-hovered-bg" : ""}`}
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
              { render: () => <>BIKE</>, className: "big-text" },
              {
                render: () => (
                  <>
                    Un nuovo modo per interpretare <br />
                    I'allenamento <em>indeel</em>
                  </>
                ),
                className: "normal-text",
              },
              {
                render: () => (
                  <>
                    SCOPRI FUORIPISTA BIKE
                    <br />
                    <img src={underline} alt="underline" />
                  </>
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
