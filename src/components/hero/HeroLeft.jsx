import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

function HeroLeft() {
  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power4.inOut" } });

    timeline
      .to(".main-head", {
        duration: 2,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: 0,
      })
      .to(
        ".head-para",
        {
          duration: 2,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          y: 0,
        },
        "-=1.9"
      )
      .to(
        ".header-links",
        {
          opacity: 1,
        },
        "-=.8"
      )
      .to(
        ".holder",
        {
          duration: 2,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          y: 0,
          stagger: 0.3,
        },
        "-=.7"
      )
      .to(
        ".line",
        {
          duration: 2,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          y: 0,
        },
        "-=1"
      );
  });

  return (
    <Wrapper>
      <Header>
        <h1 className="main-head">
          Beautifully <br /> crafting the future.
        </h1>
        <p className="head-para">
          Fulfilling clients dreams within budfet, without compromising quality,
          is paramount at Sublime Designs and Construction Association Limited.
        </p>

        <div className="header-links">
          <button>Consult</button>
          <button>Explore</button>
        </div>
      </Header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 25px;
  flex-direction: column;

  h1.main-head {
    width: 100%;
    font-size: 61px;
    font-family: "TT-Firs-Medium";
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    opacity: 0;
    transform: translateY(40px);
    line-height: 69px;
  }
  p.head-para {
    width: 98%;
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    opacity: 0;
    transform: translateY(40px);
  }

  .header-links {
    position: relative;
    display: flex;
    gap: 10px;
    opacity: 0;

    button {
      width: 120px;
      height: 37px;
      background-color: black;
      color: white;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: black;
        background-color: white;
        border: solid 1px black;
        transition: all 0.2s ease-in-out;
      }
    }

    button:nth-child(2) {
      background-color: white;
      color: black;
      border: solid 1px black;
      transition: all 0.2s ease-in-out;
    }
  }
`;

export default HeroLeft;
