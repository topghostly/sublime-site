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
  padding: 0px var(--medium-spacing);
  margin-top: var(--large-spacing);
  position: relative;
  height: 80vh;

  display: grid;
  grid-template-columns: 46% 50%;
  gap: 40px;
`;

export default Hero;
