import React, { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

import imageOne from "../assets/images/111.jpeg";
import imageTwo from "../assets/images/122.jpeg";
import imageThree from "../assets/images/11.jpg";
function Mission() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      gsap.to(
        [".head, .content, .press"],
        {
          x: 0,
          duration: 3,
          ease: "power4.inOut",
          stagger: 0.5,
        },
        "-=2"
      );

      const timeline = gsap.timeline({ defaults: { ease: "power4.inOut" } });

      timeline.to([".box-one", ".box-two", ".box-three"], {
        duration: 2,
        x: 0,
        stagger: 0.2,
      });
    }
  }, [inView]);
  return (
    <Wrapper ref={ref}>
      <ImageHolder>
        <div className="seg-col">
          <div className="line-holder">
            {/* <div className="animated-line"></div> */}
          </div>
          <SquareBox background={imageOne} className="box-three" />
        </div>
        <div className="seg-col">
          <SquareBox background={imageTwo} className="box-one" />
          <SquareBox background={imageThree} className="box-two" />
        </div>
      </ImageHolder>
      <Content>
        <h1 className="head">Our Mission</h1>
        <p className="content">
          The company is managed by a team of innovative and highly experienced
          professionals from diverse backgrounds that provides clients with the
          best advice on appropriate design techniques to adopt for
          construction. Our team pays attention to quality materials that are
          sustainable for each of our projects. At sublime Construct, we are
          fully committed to our clients, hence we work with you to make sure
          your dreams are translated into beautiful architectural masterpieces
          without stress. Our team pays attention to quality materials that are
          sustainable for each of our projects.
        </p>
        <button className="press">Learn More</button>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: var(--large-spacing);
  position: relative;
  grid-template-columns: 55% 45%;
  display: grid;
  min-height: 98vh;
  place-content: center;
  margin: var(--medium-spacing) 0px;

  .box-one {
    transform: translateX(-120%);
  }
  .box-two {
    transform: translateX(150%);
  }
  .box-three {
    transform: translateX(150%);
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  h1.head {
    width: 100%;
    font-size: 60px;
    font-family: "TT-Firs-medium";
    line-height: 69px;
    transform: translateX(-120%);
  }

  .animated-box {
    width: 100px;
    height: 7px;
    background-color: var(--theme-color);
    position: absolute;

    top: 100px;
    right: 0px;
  }

  p.content {
    width: 90%;
    transform: translateX(-120%);
  }

  button {
    width: 150px;
    height: 40px;
    outline: none;
    border: none;
    background-color: black;
    color: white;
    transform: translateX(-120%);
    /* transition: all 0.2s ease-in-out; */

    &:hover {
      color: black;
      background-color: white;
      border: solid 1px black;
      transition: all 0.2s ease-in-out;
    }
  }
`;

const ImageHolder = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .seg-col {
    width: 500px;
    height: 250px;
    display: grid;
    grid-template-columns: 50% 50%;
    overflow: hidden;

    .line-holder {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .animated-line {
        width: 150px;
        height: 8px;
        background-color: black;
      }
    }
  }
`;

const SquareBox = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  background-color: var(--theme-color);
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center 0px;
`;

export default Mission;
