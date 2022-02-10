import React from "react";
import styled from "styled-components";
import Pepsi from "../static/pepsi001.png";
import Pepsi2 from "../static/pepsi002.png";
import Pepsi3 from "../static/pepsi003.png";

const Herosection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Textbox>
          <h2>
            That's what
            <br />
            <span>I Like</span>
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <a href="/">View all Products</a>
        </Textbox>

        <Imgbox>
          <img src={Pepsi} alt="Pepsi"></img>
        </Imgbox>
        <Thumb>
          <ul>
            <li>
              <img src={Pepsi} alt="Pepsi"></img>
            </li>
            <li>
              <img src={Pepsi2} alt="Pepsi2"></img>
            </li>
            <li>
              <img src={Pepsi3} alt="Pepsi3"></img>
            </li>
          </ul>
        </Thumb>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Herosection;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 20px;
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 200px;
  grid-template-columns: 58% auto;
  justify-content: center;
  margin-top: 10rem;
`;

const Textbox = styled.div`
  font-family: "Poppins", "sans-serif";
  position: relative;
  max-width: 600px;

  h2 {
    color: #fff;
    font-size: 4em;
    line-height: 1.5em;
    font-weight: 900;
    font-family: "Poppins", "sans-serif";
    text-transform: uppercase;
  }

  span {
    color: #fff;
    font-family: "Poppins", "sans-serif";
    text-transform: uppercase;
    font-size: 2em;
  }

  p {
    color: #fff;
    font-family: "Poppins", "sans-serif";
    font-size: 14px;
  }

  a {
    display: inline-block;
    margin-top: 20px;
    padding: 8px 20px;
    background: #fff;
    color: #111;
    border-radius: 40px;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
    font-family: "Poppins", "sans-serif";
    text-transform: uppercase;
  }
`;

const Imgbox = styled.div`
  img {
    max-width: 200px;
  }
`;

const Thumb = styled.div`
  width: 100%;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
  }

  li {
    list-style: none;
    display: inline-block;
    margin: 0 20px;
    cursor: pointer;
    transition: 0.5s;
  }

  img {
    max-width: 40px;
  }
`;
