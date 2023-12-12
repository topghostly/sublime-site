import React, { useEffect } from "react";
import styled from "styled-components";
import large from "../../assets/images/one.JPG";
import small from "../../assets/images/6.JPEG";
import Drag from "../Drag";
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
              width: "100px",
              height: "100px",
              padding: "30px",
              position: "relative",
              borderRadius: "50%",
              border: "solid 1px black",
              pointer: "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48"
              height="48"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              transform="rotate(-45)"
            >
              <line x1="1" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
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
  height: fit-content;

  .small-image-holder {
    display: grid;
    grid-template-rows: 70% 30%;
    height: fit-content;
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

      svg {
        color: white;
      }
    }
    svg {
      color: black;
      stroke-width: 0.5px;
    }
  }
`;

const LargeIMG = styled.div`
  border-radius: 15px;
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
  border-radius: 15px;
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
