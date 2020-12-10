import React, { useState } from "react";
import { Parallax } from "react-parallax";
import { Text } from "./text";
import { Footer } from "./footer";
import bg from "../assets/fourth-bg-land.jpg";

export const FourthSection = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ overflowY: "scroll", height: "100vh" }}>
      <Parallax
        bgImage={bg}
        bgClassName={`fourth-section-bg ${hovered ? "second-hovered-bg" : ""}`}
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
                { render: () => <>IL FITNES</>, className: "big-text" },
                {
                  render: () => <>INCONTRA IL DESIGN</>,
                  className: "big-text",
                },
                {
                  render: () => (
                    <>
                      Un nuovo modo per interpretare<br></br>l'allenamento{" "}
                      <em>indoor</em>
                    </>
                  ),
                  className: "normal-text",
                },
              ]}
            />
          </div>
        </div>
        <Footer />
      </Parallax>
    </div>
  );
};
