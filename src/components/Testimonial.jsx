import React, { useEffect } from "react";
import styled from "styled-components";
import profilePic from "../assets/images/cw2.png";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

function Testimonial() {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (inView) {
      gsap.to(".animate2", {
        duration: 0.6,
        opacity: 1,
        y: 0,
        stagger: 0.2,
      });
    }
  });
  return (
    <Wrapper ref={ref}>
      <div className="holder">
        <Headers className="animate2">Trusted by clients</Headers>
        <TextHolder className="animate2">
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
              <div className="counter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  width="100"
                  height="100"
                >
                  <line
                    x1="50"
                    y1="50"
                    x2="80"
                    y2="50"
                    stroke="currentColor"
                    stroke-width="2"
                  />

                  <line
                    x1="50"
                    y1="50"
                    x2="55"
                    y2="45"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <line
                    x1="50"
                    y1="50"
                    x2="55"
                    y2="55"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <p>
                  <span className="current">01</span> / 14
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  width="100"
                  height="100"
                >
                  <line
                    x1="50"
                    y1="50"
                    x2="80"
                    y2="50"
                    stroke="currentColor"
                    stroke-width="2"
                  />

                  <line
                    x1="50"
                    y1="50"
                    x2="55"
                    y2="45"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <line
                    x1="50"
                    y1="50"
                    x2="55"
                    y2="55"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
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

  .current {
    color: var(--theme-color);
  }

  .animate2 {
    opacity: 0;
    transform: translateY(100px);
  }

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
    gap: 5px;
    flex-direction: column;

    .profile-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .counter {
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          color: #616161;

          &:hover {
            color: var(--theme-color);
          }
        }

        svg:nth-child(3) {
          transform: rotateZ(180deg);
        }

        p {
          font-size: 30px;
          color: #616161;
        }
      }
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
