import React from "react";
import styled from "styled-components";
import profilePic from "../assets/images/cw2.png";

function Testimonial() {
  return (
    <Wrapper>
      <div className="holder">
        <Headers>Trusted by clients</Headers>
        <TextHolder>
          <h1 className="quote">"</h1>
          <div className="text-holder">
            <p>
              Sublime design and construction Associates Limited has done four
              buildings for me, and I was impressed by their team work,
              professionalism and swift delivery of projects. Recommending them
              to my family and friends is always one of the easiest thing to do,
              because they have integrity and they don’t joke with quality in
              any jobs they’re working on.
            </p>
            <div className="profile-container">
              <div className="profile">
                <img src={profilePic} alt="profile-pic" />
                <div className="profile-details">
                  <p className="name">Folasade Ajayi-Rodney</p>
                  <p className="job">CEO Unit Vector Agency</p>
                </div>
              </div>
            </div>
          </div>
        </TextHolder>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding: var(--large-spacing);
  position: relative;
  display: grid;
  place-content: center;
  min-height: 60vh;

  .holder {
    max-width: 750px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
`;

const Headers = styled.h1`
  font-size: 60px;
  font-family: "TT-Firs-medium";
  line-height: 69px;
`;

const TextHolder = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  grid-template-columns: 20% 80%;
  h1.quote {
    font-size: 150px;
    line-height: 100px;
    color: var(--theme-color);
    font-family: "Montsarrat-SemiBold";
  }

  .text-holder {
    display: flex;
    gap: 35px;
    flex-direction: column;

    .profile-container {
      .profile {
        display: flex;
        gap: 15px;
        height: fit-content;

        img {
          width: 45px;
          border-radius: 50%;
        }

        .profile-details {
          display: flex;
          justify-content: center;
          flex-direction: column;

          p {
            font-size: 12px;
          }

          p.name {
            font-family: "Montsarrat-SemiBold";
          }
          p.job {
            font-size: 10px;
          }
        }
      }
    }
  }
`;
export default Testimonial;
