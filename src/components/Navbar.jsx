import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo-black.png";
import Drag from "./Drag";

function Navbar() {
  return (
    <Wrapper>
      <img src={logo} alt="logo" className="company-logo" />

      <MidLinks>
        <div className="link-container">
          <Drag
            theStyle={{
              width: "25px",
              height: "10px",
              position: "relative",
              pointer: "all",
            }}
          >
            <p>Home</p>
          </Drag>
        </div>
        <div className="link-container">
          <Drag
            theStyle={{
              width: "25px",
              height: "10px",
              position: "relative",
              pointer: "all",
            }}
          >
            <p>About</p>
          </Drag>
        </div>
        <div className="link-container">
          <Drag
            theStyle={{
              width: "25px",
              height: "10px",
              position: "relative",
              pointer: "all",
            }}
          >
            <p>Service</p>
          </Drag>
        </div>
        <div className="link-container">
          <Drag
            theStyle={{
              width: "25px",
              height: "10px",
              position: "relative",
              pointer: "all",
            }}
          >
            <p>Portfolio</p>
          </Drag>
        </div>
        <div className="link-container">
          {" "}
          <Drag
            theStyle={{
              width: "25px",
              height: "10px",
              position: "relative",
              pointer: "all",
            }}
          >
            <p>Contact</p>
          </Drag>
        </div>
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
  gap: 10px;

  .link-container {
    position: relative;
    padding: 20px 30px;
    overflow: hidden;

    ::before {
      content: "";
      position: absolute;
      bottom: -10px;
      border-radius: 20px;
      left: 0;
      text-decoration: none;
      background-color: var(--theme-color);
      width: 25px;
      height: 4px;
      transform: translateX(-220%);
      transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    }
  }

  .link-container:hover {
    ::before {
      content: "";
      position: absolute;
      bottom: -10px;
      border-radius: 20px;
      left: 50%;
      text-decoration: none;
      background-color: var(--theme-color);
      transform: translateX(-50%);
      transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    }
  }
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
