import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo-black.png";
import Drag from "./Drag";

function Navbar() {
  return (
    <Wrapper>
      <img src={logo} alt="logo" className="company-logo" />

      <MidLinks>
        <Drag
          theStyle={{
            width: "50px",
            height: "20px",
            position: "relative",
            pointer: "all",
          }}
        >
          <p>Home</p>
        </Drag>

        <Drag
          theStyle={{
            width: "50px",
            height: "20px",
            position: "relative",
            pointer: "all",
          }}
        >
          <p>About</p>
        </Drag>
        <Drag
          theStyle={{
            width: "50px",
            height: "20px",
            position: "relative",
            pointer: "all",
          }}
        >
          <p>Service</p>
        </Drag>
        <Drag
          theStyle={{
            width: "50px",
            height: "20px",
            position: "relative",
            pointer: "all",
          }}
        >
          <p>Portfolio</p>
        </Drag>
        <Drag
          theStyle={{
            width: "50px",
            height: "20px",
            position: "relative",
            pointer: "all",
          }}
        >
          <p>Contact</p>
        </Drag>
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
  gap: 50px;

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
