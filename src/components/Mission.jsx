import React from "react";
import styled from "styled-components";
function Mission() {
  return (
    <Wrapper>
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
        <button>Learn More</button>
      </Content>
      <ImageHolder></ImageHolder>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: var(--large-spacing);
  position: relative;
  grid-template-columns: 50% 50%;
  display: grid;
  min-height: 98vh;
  place-content: center;
  margin: var(--medium-spacing) 0px;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  gap: 40px;
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

export default Mission;
