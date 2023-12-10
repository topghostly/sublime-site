import React, { useEffect } from "react";
import styled from "styled-components";
import large from "../../assets/images/one.JPG";
import small from "../../assets/images/6.JPEG";
import Drag from "../Drag";
import arrow from "../../assets/images/arrow.svg";
import gsap from "gsap";

function HeroRight() {
  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power4.inOut" } });

    timeline
      .to(".large-img", {
        duration: 1.5,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: 0,
      })
      .to(".circleHolder", { scale: 1 }, "-=.2")
      .to(
        ".small-img",
        {
          duration: 1.5,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          y: 0,
        },
        "-=.8"
      );
  });

  return (
    <Wrapper>
      <div className="small-image-holder">
        <div className="circleHolder">
          <Drag
            theStyle={{
              padding: "30px",
              position: "relative",
              borderRadius: "50%",
            }}
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
              height="800px"
              width="800px"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 47 47"
              xml:space="preserve"
            >
              <path d="M47,19c0-0.552-0.447-1-1-1s-1,0.448-1,1v24.586L1.707,0.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414  L43.586,45H19c-0.553,0-1,0.448-1,1s0.447,1,1,1h27c0.13,0,0.26-0.027,0.382-0.077c0.245-0.101,0.44-0.296,0.541-0.541  C46.974,46.26,47,46.13,47,46V19z" />
            </svg> */}
          </Drag>
        </div>

        <SmallIMG backGround={small} className="small-img"></SmallIMG>
      </div>
      <LargeIMG backGround={large} className="large-img" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 40% 59%;
  gap: 10px;

  .small-image-holder {
    display: grid;
    grid-template-rows: 70% 30%;
  }

  .circleHolder {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    scale: 0;

    :hover {
      background-color: var(--theme-color);
      transition: all 0.2s ease-in-out;
      border: none;
    }

    .drag-svg {
      width: 25px;
      transform: translateY(5px);

      color: red;
    }
  }
`;

const LargeIMG = styled.div`
  position: relative;
  height: 72vh;
  background-color: red;
  background-image: url(${(props) => props.backGround});
  background-size: cover;
  background-position: center 0px;
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
  opacity: 0;
  transform: translateY(40px);
`;
const SmallIMG = styled.div`
  position: relative;
  height: 270px;
  background-color: red;
  background-image: url(${(props) => props.backGround});
  background-size: cover;
  background-position: center 0px;
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
  opacity: 0;
  transform: translateY(40px);
`;

export default HeroRight;
