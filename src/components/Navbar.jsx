import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo-black.png";

function Navbar() {
  return (
    <Wrapper>
      <img src={logo} alt="logo" className="company-logo" />

      <MidLinks>
        <p>Home</p>
        <p>About</p>
        <p>Service</p>
        <p>Portfolio</p>
        <p>Contact</p>
      </MidLinks>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 800px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0pc var(--medium-spacing);

  .company-logo {
    width: 100px;
  }

  p {
    margin: 0;
    font-family: "TT-Firs-Medium";
    font-size: 22px;
  }
`;

const MidLinks = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;

  p {
    font-family: "TT-Firs-Medium";
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: var(--theme-color);
      transition: all 0.3s ease-in-out;
    }
  }
`;

export default Navbar;
