import React from "react";
import styled from "styled-components";
import Logo from "../static/logo.png";

const Navbar = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <NavbarWrapper>
          <a href="/">
            <img src={Logo} alt="logo"></img>
          </a>
          <ListWrapper>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">What's New</a>
            </li>
            <li>
              <a href="/">Newsletter</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ListWrapper>
        </NavbarWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: white; */
`;

const ListWrapper = styled.div`
  position: relative;
  display: flex;

  li {
    list-style: none;
    transition: 0.5s;
    :hover {
      transform: translateY(-15px);
    }
  }

  a {
    display: inline-block;
    color: #fff;
    font-weight: 300;
    margin-left: 40px;
    font-family: "Poppins", "sans-serif";
    text-decoration: none;
  }
`;

const ContentWrapper = styled.div`
  padding: 10px 30px 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavbarWrapper = styled.div`
  width: 90%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 80px;
    position: relative;
    transition: 0.5s;
    :hover {
      transform: scale(1.1);
      transform: rotate(360deg);
    }
  }
`;
