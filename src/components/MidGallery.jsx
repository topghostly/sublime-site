import React, { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

import imageOne from "../assets/images/1334.jpeg";
import imageTwo from "../assets/images/122.jpeg";
import imageThree from "../assets/images/11.jpg";
import imageFour from "../assets/images/9.jpeg";

function MidGallery() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      const timeline = gsap.timeline({ defaults: { ease: "power4.inOut" } });

      timeline
        .to(".image-box", {
          backgroundSize: "160%",
          duration: 1.1,
          opacity: 1,
        })
        .to(
          ".move-up",
          {
            y: -30,
            duration: 1,
          },
          "-=1"
        )
        .to(
          ".move-down",
          {
            y: 80,
            duration: 1,
          },
          "-=1"
        )
        .to(".image-box p", {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          duration: 2,
          y: 0,
          stagger: 0.2,
        });
    }
  });
  return (
    <Wrapper ref={ref}>
      <div className="small-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="22px"
          height="22px"
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
        <p>Image Gallery</p>
      </div>
      <div className="image-holder">
        <TestImage backimage={imageOne} className="image-box move-down">
          <p>Office Interior Space</p>
        </TestImage>
        <TestImage backimage={imageTwo} className="image-box move-up">
          <p>Office Interior Space</p>
        </TestImage>
        <TestImage backimage={imageThree} className="image-box move-down">
          <p>Contemporary Duplex</p>
        </TestImage>
        <TestImage backimage={imageFour} className="image-box move-up">
          <p>Office Interior Space</p>
        </TestImage>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: var(--medium-spacing);

  .small-title {
    position: relative;
    width: 205px;
    height: fit-content;
    margin: var(--large-spacing) 0px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: baseline;
    p {
      color: var(--grey-color);
      font-size: 14px;
      margin-left: 50px;
      margin-top: 17px;
    }
    svg {
      position: absolute;
      top: 0px;
      right: 0px;
      color: var(--grey-color);
      transform: rotate(180deg);
    }
  }

  .image-holder {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 15px;
    margin-top: 110px;

    .image-box {
    }
    .move-up {
      /* transform: translateY(-100px); */
    }
  }
`;

const TestImage = styled.div`
  width: 290px;
  height: 440px;
  background-color: red;
  border-radius: 15px;
  background-image: url(${(props) => props.backimage});
  background-size: 280%;
  transform: translateY(40px);
  opacity: 0;
  background-position: center;
  position: relative;

  p {
    position: absolute;
    bottom: -40px;
    left: 10px;
    font-family: "TT-Firs-medium";
    font-size: 12px;
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    opacity: 0;
    transform: translateY(40px);
  }
`;

export default MidGallery;
