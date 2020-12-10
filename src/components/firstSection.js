import React, { useState } from "react";
import { DownButton } from "./downButton";
import { Parallax } from "react-parallax";
import { Text } from "./text";
import bg from "../assets/first-bg-land.jpg";

export const FirstSection = ({ onDown }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Parallax bgImage={bg} bgClassName="first-section-bg" strength={300}>
      <div className="first-section section">
        <div
          className="texts-container"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Text
            paragraphs={[
              { render: () => <>IL FITNES</>, className: "big-text" },
              {
                render: () => <>INCONTRA IL DESIGN</>,
                className: "big-text",
              },
              {
                render: () => (
                  <>
                    Un di <em>progetto</em> Adriano Design el Elite
                  </>
                ),
                className: "normal-text",
              },
            ]}
          />
        </div>
        <DownButton onClick={onDown} />
      </div>
    </Parallax>
  );
};
