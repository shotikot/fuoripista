import React, { useRef, useState, useEffect } from "react";
import "../styles/text.css";

export const Text = ({ paragraphs }) => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);
  const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  useEffect(() => {
    const listener = () => {
      if (
        containerRef.current &&
        !visible &&
        isInViewport(containerRef.current)
      ) {
        setVisible(true);
      }
    };
    document.addEventListener("scroll", listener);
    listener();
    return () => document.removeEventListener("scroll", listener);
  });
  return paragraphs.map((item, i) => {
    return (
      <div
        key={i}
        className={`paragraph-container ${visible ? "paragraph-visible" : ""}`}
        ref={containerRef}
      >
        <span className={item.className}>{item.render()}</span>
      </div>
    );
  });
};
