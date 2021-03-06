import React from "react";
import styled from "styled-components";
import Herosection from "../Herosection";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <Wrapper>
      <Navbar />
      <Herosection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* align-items: center; */
  background: #0062be;
  transition: 0.5s;

  @media (max-width: 1023px) {
    min-height: 200vh;
  }
`;
