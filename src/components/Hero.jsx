import React from "react";
import styled from "styled-components";
import HeroLeft from "./hero/HeroLeft";
import HeroRight from "./hero/HeroRight";
import Firstpage from "./Firstpage";

function Hero() {
  return (
    <Wrapper>
      <HeroLeft />
      <HeroRight />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: var(--medium-spacing);
  margin: var(--large-spacing) 0px;
  margin-bottom: var(--small-spacing);
  position: relative;
  height: fit-content;

  display: grid;
  grid-template-columns: 46% 50%;
  gap: 40px;
`;

export default Hero;
