import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo.png";

function Footer() {
  return (
    <Wrapper>
      <div className="logo-section">
        <div className="holder">
          {" "}
          <img src={Logo} alt="logo" />
          <p>
            Suite 19b, 1st Floor, Block 2, Alausa Shopping Mall, Alausa, Ikeja,
            Lagos
          </p>
        </div>
      </div>
      <div className="nav-section"></div>
      <div className="social-section"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  height: 150px;
  width: 100%;
  margin: var(--medium-spacing) 0px;
  margin-bottom: 0px;
  font-size: 13px;

  .logo-section {
    width: 100%;
    height: 100%;
    padding: 10px 5px;

    .holder {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 80%;
      margin: 0px auto;
      gap: 20px;
      img {
        width: 100px;
      }
    }
  }
  .nav-section {
  }
  .social-section {
  }
`;
export default Footer;
