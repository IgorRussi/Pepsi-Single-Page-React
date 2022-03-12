import React from "react";
import styled from "styled-components";
import Pepsi from "../static/pepsi001.png";
import Pepsi2 from "../static/pepsi002.png";
import Pepsi3 from "../static/pepsi003.png";
import Facebook from "../static/facebook.png";
import Instagram from "../static/instagram.png";
import Twitter from "../static/twitter.png";

const Herosection = () => {
  function handleClick(name) {
    document.querySelector(".pepsi").src = name;
  }

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
          <img src={Pepsi} alt="Pepsi" className="pepsi"></img>
        </Imgbox>
        <Sci>
          <ul>
            <li>
              <a href="/">
                <img src={Instagram} alt="Instagram"></img>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Facebook} alt="Facebook"></img>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Twitter} alt="Twitter"></img>
              </a>
            </li>
          </ul>
        </Sci>
      </ContentWrapper>
      <Thumb>
        <ul>
          <li>
            <img
              src={Pepsi}
              onClick={() => handleClick(Pepsi)}
              alt="Pepsi"
            ></img>
          </li>
          <li>
            <img
              src={Pepsi2}
              onClick={() => handleClick(Pepsi2)}
              alt="Pepsi2"
            ></img>
          </li>
          <li>
            <img
              src={Pepsi3}
              onClick={() => handleClick(Pepsi3)}
              alt="Pepsi3"
            ></img>
          </li>
        </ul>
      </Thumb>
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
  grid-template-columns: 58% auto auto;
  justify-content: center;
  margin-top: 10rem;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    margin-bottom: 17rem;
  }
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
    transition: 0.5s;
    :hover {
      transform: scale(1.1);
    }
  }
`;

const Imgbox = styled.div`
  img {
    max-width: 200px;
  }
`;

const Sci = styled.div`
  display: flex;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  li {
    list-style: none;
  }

  a {
    display: inline-block;
    filter: invert(1);
    margin-top: 12px;
    margin-left: 30px;
  }

  img {
    transform: scale(0.6);
  }
`;

const Thumb = styled.div`
  bottom: 90px;
  position: absolute;
  display: flex;
  margin: auto;
  width: 94%;
  padding: 10px;
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
    :hover {
      transform: translateY(-15px);
    }
  }

  img {
    max-width: 40px;
  }
`;
