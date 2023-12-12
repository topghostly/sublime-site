import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo.png";

function Footer() {
  return (
    <Wrapper>
      <div className="logo-section">
        <div className="holder">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="nav-section-holder">
        <div className="nav-section">
          <p>&copy; SUBLIME LIMITED</p>
          <p>PORTFOLIO</p>
          <p>CONTACT</p>
          <p>ABOUT</p>
          <p>PROFILE</p>
          <p>ENDING</p>
        </div>
        <p>NIGHT MODE</p>
      </div>
      <div className="social-section"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: var(--medium-spacing) 0px;
  margin-bottom: var(--small-spacing);
  font-size: 12px;

  .logo-section {
    width: 100%;
    height: 100%;
    padding: 10px 5px;

    .holder {
      img {
        width: 100px;
      }
    }
  }
  .nav-section-holder {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    .nav-section {
      display: flex;
      gap: 20px;
      margin-top: var(--small-spacing);
    }
  }

  .social-section {
  }
`;
export default Footer;
