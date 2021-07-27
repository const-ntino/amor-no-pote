import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  padding: 50px;

  background: linear-gradient(-45deg, #ee7752, #e73c7e, #cb356b, #bd3f32);
  background-size: 400% 400%;
  animation: gradient 7s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 992px) {
    padding: 50px 10px 10px;
  }
`;

export const Container = styled(motion.div)`
  position: relative;
  width: calc(100% - 100px);
  min-height: calc(100vh - 280px);
  min-height: 450px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;

  @media (min-width: 1300px) {
    width: 1200px;
  }

  @media (max-width: 1200px) {
    position: relative;
    width: calc(100% - 20px);
  }

  @media (max-width: 992px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
`;

export const Header = styled(motion.div)`
  position: absolute;
  top: -40px;
  right: 20px;
  left: 20px;
  padding: 10px 35px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);

  .logo {
    img {
      max-height: 50px;
    }
  }

  ul {
    display: flex;
  }

  ul li {
    list-style: none;
    margin: 0 10px;
  }

  ul li a {
    text-decoration: none;
    font-weight: 500;
    color: #e5e5e5;
    padding: 8px 15px;
    border-radius: 25px;
  }

  ul li a:hover,
  ul li a.active {
    background: #f4f6fb;
    color: #fca311;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: 0.7s;
  }

  @media (max-width: 992px) {
    position: relative;
    flex-direction: column;
    width: 100%;
    top: -60px;
    padding: 20px;
    right: 0;
    left: 0;

    ul {
      margin-top: 10px;
      flex-wrap: wrap;
    }

    ul li {
      margin: 2px;
    }

    ul li a {
      display: inline-block;
    }
  }

  @media (max-width: 600px) {
    .logo {
      text-align: center;
    }
  }

  @media (max-width: 300px) {
    .logo {
      font-size: 1.5em;
    }

    ul li a {
      padding: 8px 8px;
      font-size: 0.8em;
    }
  }
`;

export const Intro = styled(motion.div)`
  transform: translateX(-100px) !important;
  max-width: 700px;
  padding: 40px 90px;
  padding-left: 110px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);

  h2 {
    font-size: 2em;
    color: #ffffff;
    font-family: Zilla Slab;
    margin-bottom: 20px;
    max-width: 22ch;
  }

  p {
    font-size: 1.14em;
    color: #e5e5e5;
    line-height: 1.6;
    letter-spacing: 0.8px;
    max-width: 32ch;
  }

  a {
    display: inline-block;
    padding: 15px 30px;
    background: #f4f6fb;
    color: #fca311;
    margin-top: 20px;
    border-radius: 30px;
    font-size: 1.2em;
    font-weight: 500;
    text-decoration: none;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);

    :hover {
      background: #fca311;
      color: #f4f6fb;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
      transition: 0.7s;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.3em;
      padding-bottom: 10px;
    }

    p {
      font-size: 0.92em;
      margin: 0 auto;
    }
  }

  @media (max-width: 992px) {
    transform: translateX(0px) !important;
    width: 100%;
    padding: 30px;
    margin-top: -40px;

    a {
      font-size: 1em;
      padding: 10px 20px;
    }
  }
`;

export const ImgBox = styled(motion.div)`
  img {
    max-width: 400px;
    animation: animate 3s linear infinite;
  }
  @keyframes animate {
    0%,
    100% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(20px);
    }
  }

  @media (max-width: 992px) {
    margin-bottom: 30px;

    @keyframes animate {
      0%,
      100% {
        transform: translateY(10px);
      }
      50% {
        transform: translateY(0px);
      }
    }
  }

  @media (max-width: 600px) {
    img {
      max-width: 300px;
    }
  }

  @media (max-width: 300px) {
    img {
      max-width: 250px;
    }
  }
`;

export const SocialContainer = styled(motion.div)`
  position: absolute;
  right: -25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  li {
    list-style: none;
  }

  @media (max-width: 992px) {
    position: relative;
    flex-direction: row;
    left: 0;
  }
`;

export const Social = styled(motion.div)`
  position: relative;
  height: 80px;
  width: 80px;

  margin: 15px 0;
  padding: 15px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #e5e5e5;
  background-color: rgba(255, 255, 255, 0.1);

  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  transition: 0.7s;
  overflow: hidden;

  cursor: pointer;

  &:hover {
    transform: translateY(-20px) !important;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    transform: skewX(45deg) translateX(150px) !important;
    transition: 0.7s;
  }
  &:hover::before {
    transform: skewX(45deg) translateX(-150px) !important;
  }

  @media (max-width: 992px) {
    margin: 0 10px;
  }
`;
