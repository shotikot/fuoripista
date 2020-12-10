import React, { useState, useRef } from "react";
import CursorFollower from "../components/cursorFollower";
import { FirstSection } from "../components/firstSection";
import { FourthSection } from "../components/fourthSection";
import { Logo } from "../components/logo";
import { NavBullets } from "../components/navBullets";
import { SecondSection } from "../components/secondSection";
import { ThirdSection } from "../components/thirdSection";
import "../styles/landing.css";

const Landing = () => {
  const [active, setActive] = useState(0);
  const fRef = useRef(null);
  const sRef = useRef(null);
  const tRef = useRef(null);
  const foRef = useRef(null);
  const executeScroll = ref => ref.current.scrollIntoView();
  const refHelper = [fRef, sRef, tRef, foRef];
  const onBulletChange = index => {
    setActive(index);
    executeScroll(refHelper[index]);
  };
  const onDown = () => {
    setActive(1);
    executeScroll(refHelper[1]);
  };
  return (
    <div className="landing-page page">
      <Logo />
      <div ref={fRef}>
        <FirstSection onDown={onDown} />
      </div>
      <div ref={sRef}>
        <SecondSection />
      </div>
      <div ref={tRef}>
        <ThirdSection />
      </div>
      <div ref={foRef}>
        <FourthSection />
      </div>
      <NavBullets activeIndex={active} onChange={onBulletChange} />
    </div>
  );
};

export default Landing;
