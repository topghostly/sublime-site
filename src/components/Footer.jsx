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
        <div className="night-mode">
          <div className="night">
            <div className="slider"></div>
          </div>
          <p>NIGHT MODE</p>
        </div>
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
      margin-top: 10px;
    }

    .night-mode {
      display: flex;
      gap: 10px;
      align-items: center;

      .night {
        width: 36px;
        background-color: rgb(162, 162, 247);
        height: 18px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 100px;
        cursor: pointer;

        .slider {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: rgb(80, 80, 238);
          transform: translateX(-5px);
        }
      }
    }
  }

  .social-section {
  }
`;

export default Footer;
