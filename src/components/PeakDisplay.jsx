import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

function PeakDisplay({ showPeakDisplay }) {
  const blockRef = useRef(null);

  const moveBlock = (x, y) => {
    gsap.to(blockRef.current, {
      x: x + window.pageXOffset - 170,
      y: y + window.pageYOffset - 150,
      duration: 0.1,
      ease: "power2.out",
    });
  };

  const getMousePosition = (e) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    moveBlock(mouseX, mouseY);
  };

  useEffect(() => {
    addEventListener("mousemove", getMousePosition);
    return () => {
      window.removeEventListener("mousemove", getMousePosition);
    };
  });
  return (
    <Wrapper ref={blockRef} showPeakDisplay={showPeakDisplay}>
      <div className="holder-container"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  z-index: 100;
  display: ${(props) => (props.showPeakDisplay ? "block" : "none")};

  .holder-container {
    width: 300px;
    height: 300px;
    background-color: var(--theme-color);
  }
`;

export default PeakDisplay;
