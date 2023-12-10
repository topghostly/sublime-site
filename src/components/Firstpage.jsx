import React, { useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

import imageOne from "../assets/images/2.jpg";
import imageTwo from "../assets/images/4.JPEG";
import imageThree from "../assets/images/one.JPG";
import imageFour from "../assets/images/5.jpeg";

function Firstpage() {
  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power4.inOut" } });

    timeline
      .to(".logo", { width: "160px", delay: 0.5 })
      .to(".one, .two, .three, .four", {
        duration: 2,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: 0,
        stagger: 0.2,
      })
      .to(
        ".wrapper",
        {
          opacity: 0,
          display: "none",
          duration: 1,
        },
        "-=.1"
      );
  });
  return (
    <Wrapper className="wrapper">
      <img src={logo} alt="subliemLogo" className="logo" />
      <img src={imageOne} alt="subliemLogo" className="one" />
      <img src={imageTwo} alt="subliemLogo" className="two" />
      <img src={imageFour} alt="subliemLogo" className="three" />
      <img src={imageThree} alt="subliemLogo" className="four" />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 103vh;
  background-color: white;
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: 100;
  img {
    width: 350px;
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
  }

  .one {
    position: absolute;
    top: 20px;
    left: 20px;
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    opacity: 0;
    transform: translateY(40px);
  }
  .two {
    position: absolute;
    bottom: 20px;
    right: 20px;
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    opacity: 0;
    transform: translateY(40px);
  }
  .three {
    position: absolute;
    bottom: 20px;
    left: 200px;
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    opacity: 0;
    transform: translateY(40px);
  }
  .four {
    position: absolute;
    top: 20px;
    right: 200px;
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    opacity: 0;
    transform: translateY(40px);
  }
`;
export default Firstpage;
