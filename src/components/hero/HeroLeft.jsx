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

      <Works>
        <div className="holder">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
          >
            <g data-name="Layer 2">
              <g data-name="diagonal-arrow-right-up">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
                />

                <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
              </g>
            </g>
          </svg>
          <p className="project-name">Architectural Design</p>
          <p className="project-title">
            Building for tomorrow with sustainable architect
          </p>
        </div>
        <div className="line"></div>
        <div className="holder">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
          >
            <g data-name="Layer 2">
              <g data-name="diagonal-arrow-right-up">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
                />

                <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
              </g>
            </g>
          </svg>
          <p className="project-name">Interior Design</p>
          <p className="project-title">
            Sustainable interior for better home space
          </p>
        </div>
        <div className="line"></div>
        <div className="holder">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
          >
            <g data-name="Layer 2">
              <g data-name="diagonal-arrow-right-up">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
                />

                <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
              </g>
            </g>
          </svg>
          <p className="project-name">Furnitures</p>
          <p className="project-title">
            Crafting furnitures for a sustainable lifestyle
          </p>
        </div>
      </Works>
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
      border-radius: 100px;
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

const Works = styled.div`
  width: 99%;
  font-size: 13px;
  margin-top: var(--large-spacing);
  position: relative;
  bottom: 0px;

  .holder {
    height: fit-content;
    display: grid;
    grid-template-columns: 5% 26% 62%;
    gap: 20px;
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    opacity: 0;
    transform: translateY(40px);

    .project-name {
      font-family: "Montsarrat-SemiBold";
    }
  }

  .line {
    width: 98%;
    height: 1px;
    background-color: black;
    margin: 17px 0px;
    clip-path: polygon(0 100%, 0 100%, 0 0, 0 0);
  }
`;
export default HeroLeft;
