import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { useEffect } from "react";

function WorkHolder({ setShowPeakDisplay }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      const timeline = gsap.timeline({ defaults: { ease: "power4.inOut" } });

      timeline
        .to(".holder", {
          duration: 1.4,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          y: 0,
          stagger: 0.2,
        })
        .to(
          ".line",
          {
            duration: 2,
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
          },
          "-=2"
        );
    }
  });

  return (
    <Works ref={ref}>
      <div className="small-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="22px"
          height="22px"
          viewBox="0 0 24 24"
        >
          <g data-name="Layer 2">
            <g data-name="diagonal-arrow-right-up">
              <rect
                width="24"
                height="24"
                transform="rotate(180 12 12)"
                opacity="0"
              />

              <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
            </g>
          </g>
        </svg>
        <p>Some Services</p>
      </div>
      <div
        className="holder"
        onMouseEnter={() => {
          console.log("Mouse is in");
          setShowPeakDisplay(true);
        }}
        onMouseLeave={() => {
          console.log("Mouse is out");
          setShowPeakDisplay(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="22px"
          height="22px"
          viewBox="0 0 24 24"
        >
          <g data-name="Layer 2">
            <g data-name="diagonal-arrow-right-up">
              <rect
                width="24"
                height="24"
                transform="rotate(180 12 12)"
                opacity="0"
              />

              <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
            </g>
          </g>
        </svg>
        <p className="project-name">Architectural Design</p>
        <p className="project-title">
          Building for tomorrow with sustainable architect
        </p>
      </div>
      <div className="line"></div>
      <div className="holder">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="22px"
          height="22px"
          viewBox="0 0 24 24"
        >
          <g data-name="Layer 2">
            <g data-name="diagonal-arrow-right-up">
              <rect
                width="24"
                height="24"
                transform="rotate(180 12 12)"
                opacity="0"
              />

              <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
            </g>
          </g>
        </svg>
        <p className="project-name">Interior Design</p>
        <p className="project-title">
          Sustainable interior for better home space
        </p>
      </div>
      <div className="line"></div>
      <div className="holder">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="22px"
          height="22px"
          viewBox="0 0 24 24"
        >
          <g data-name="Layer 2">
            <g data-name="diagonal-arrow-right-up">
              <rect
                width="24"
                height="24"
                transform="rotate(180 12 12)"
                opacity="0"
              />

              <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
            </g>
          </g>
        </svg>
        <p className="project-name">Property Development</p>
        <p className="project-title">
          Sustainable interior for better home space
        </p>
      </div>
      <div className="line"></div>
      <div className="holder">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="22px"
          height="22px"
          viewBox="0 0 24 24"
        >
          <g data-name="Layer 2">
            <g data-name="diagonal-arrow-right-up">
              <rect
                width="24"
                height="24"
                transform="rotate(180 12 12)"
                opacity="0"
              />

              <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
            </g>
          </g>
        </svg>
        <p className="project-name">Project Management</p>
        <p className="project-title">
          Sustainable interior for better home space
        </p>
      </div>
      <div className="line"></div>
      <div className="holder">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="22px"
          height="22px"
          viewBox="0 0 24 24"
        >
          <g data-name="Layer 2">
            <g data-name="diagonal-arrow-right-up">
              <rect
                width="24"
                height="24"
                transform="rotate(180 12 12)"
                opacity="0"
              />

              <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
            </g>
          </g>
        </svg>
        <p className="project-name">Construction</p>
        <p className="project-title">
          Sustainable interior for better home space
        </p>
      </div>
      <div className="line"></div>
      <div className="holder">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="22px"
          height="22px"
          viewBox="0 0 24 24"
        >
          <g data-name="Layer 2">
            <g data-name="diagonal-arrow-right-up">
              <rect
                width="24"
                height="24"
                transform="rotate(180 12 12)"
                opacity="0"
              />

              <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
            </g>
          </g>
        </svg>
        <p className="project-name">Furnitures</p>
        <p className="project-title">
          Crafting furnitures for a sustainable lifestyle
        </p>
      </div>
    </Works>
  );
}

const Works = styled.div`
  width: 100%;
  font-size: 13px;
  margin-top: var(--large-spacing);
  /* margin-bottom: var(--large-spacing); */
  position: relative;

  .small-title {
    position: relative;
    width: 205px;
    height: fit-content;
    margin: var(--large-spacing) 0px;
    display: flex;
    justify-content: center;
    align-items: baseline;
    p {
      color: var(--grey-color);
      font-size: 14px;
      margin-left: 50px;
      margin-top: 17px;
    }
    svg {
      position: absolute;
      top: 0px;
      right: 0px;
      color: var(--grey-color);
      transform: rotate(180deg);
    }
  }

  .holder {
    height: 80px;
    display: grid;
    grid-template-columns: 10% 45% 45%;
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    opacity: 0;
    transform: translateY(40px);
    cursor: pointer;

    svg {
      margin: auto 0px;
      color: #474747;
      transition: all 0.2s ease-in-out;
    }

    .project-name {
      font-family: "Montsarrat-Medium";
      font-size: 40px;
      margin: 0xp;
      transition: all 0.2s ease-in-out;
    }
    .project-title {
      font-size: 15px;
      margin: auto 0px;
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      .project-name {
        font-family: "Montsarrat-Medium";
        font-size: 40px;
        margin: 0xp;
        color: #8f8f8f;
        transform: translateX(-10px);
        transition: all 0.2s ease-in-out;
      }
      .project-title {
        font-size: 15px;
        margin: auto 0px;
        color: #8f8f8f;
        transform: translateX(10px);
        transition: all 0.2s ease-in-out;
      }
      svg {
        margin: auto 0px;
        color: var(--theme-color);
        transition: all 0.2s ease-in-out;
      }
    }
  }

  .line {
    width: 85%;
    height: 1px;
    background-color: var(--grey-color);
    margin: 17px auto;
    clip-path: polygon(0 100%, 0 100%, 0 0, 0 0);
  }
`;
export default WorkHolder;
