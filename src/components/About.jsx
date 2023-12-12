import React from "react";
import styled from "styled-components";
function About() {
  return (
    <Wrapper>
      {/* <ImageHolder></ImageHolder> */}
      <Content>
        <h1 className="head">About Us</h1>
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

        <button>Learn More</button>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: var(--large-spacing);
  position: relative;
  /* grid-template-columns: 50% 50%;
  display: grid; */
  min-height: 80vh;
  place-content: center;
  border-radius: 20px;
  margin: var(--medium-spacing) 0px;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  width: 900px;
  text-align: center;
  margin: 0px auto;

  h1.head {
    width: 100%;
    font-size: 60px;
    font-family: "TT-Firs-medium";
    line-height: 69px;
    /* clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    opacity: 0;
    transform: translateY(40px); */
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
  }

  button {
    width: 150px;
    height: 40px;
    outline: none;
    border: none;
    background-color: black;
    color: white;
    transition: all 0.2s ease-in-out;

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
`;
export default About;
