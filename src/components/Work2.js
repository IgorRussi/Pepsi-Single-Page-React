import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import { H1 } from "../styles/TextStyles";
import Gallery from "./Gallery";

const Work2 = () => {
  return (
    <Wrapper id="work">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#67aaf9">
          <animate
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur="10s"
            values="
            M0,64L80,58.7C160,53,320,43,480,80C640,117,800,203,960,250.7C1120,299,1280,309,1360,314.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
            M0,96L80,117.3C160,139,320,181,480,181.3C640,181,800,139,960,133.3C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
            M0,32L80,58.7C160,85,320,139,480,181.3C640,224,800,256,960,240C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
            M0,64L80,101.3C160,139,320,213,480,250.7C640,288,800,288,960,245.3C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
            
"
          />
        </path>
      </svg>

      <WrapperContainer>
        <WrapperWork>
          <Fade bottom>
            <Title>PROJECTS</Title>
          </Fade>
          <Fade left>
            <Gallery />
          </Fade>
        </WrapperWork>
      </WrapperContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  overflow: hidden;

  svg {
    transform: rotate(180deg);

    top: 467px;
    bottom: 0;
    @media (max-width: 850px) {
      top: inherit;
      bottom: inherit;
      margin-top: -3px;
    }
  }
`;

const WrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapperWork = styled.div`
  width: 80vw;
  /* margin-top: 10vh; */
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3rem;
    line-height: 20px;
    @media (max-width: 850px) {
      font-size: 2.25rem;
    }
  }
  .grid {
    display: grid;
    margin-top: 40px;
    margin-bottom: 200px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    @media (max-width: 450px) {
      grid-template-columns: 1fr;
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const Title = styled(H1)`
  color: #24292d;
  gap: 10px;
  margin-bottom: 2rem;
`;

export default Work2;
