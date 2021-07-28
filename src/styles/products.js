import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: relative;
  width: calc(100% - 100px);
  min-height: calc(100vh - 280px);
  min-height: 450px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
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

export const CardContainer = styled(motion.div)`
  position: relative;
  margin-top: 40px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const H2 = styled(motion.div)`
  font-size: 2em;
  color: #ffffff;
  font-family: Zilla Slab;
  margin: 5px auto 25px;
`;

export const Card = styled(motion.div)`
  width: 250px;
  height: 300px;
  border-radius: 15px;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin: 20px;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: default;
  }

  :hover .card-content {
    bottom: 0px;
  }

  :hover .content-box h3 {
    opacity: 1;
    transform: translateY(0px);
  }

  :hover .content-box .button {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const ImgBox = styled.div`
  img {
    max-height: 308px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  position: absolute;
  bottom: -160px;
  width: 100%;
  height: 160px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  flex-direction: column;
  backdrop-filter: blur(25px);
  box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: bottom 0.5s;
`;

export const Button = styled.button`
  grid-area: button;
  height: 4rem;
  width: 4rem;
  padding: 0.7rem;
  cursor: pointer;
  background-color: transparent;
  margin: 0 auto 14px;
  border-radius: 50%;

  transition: 0.5s;
  transition-delay: 0.4s;
  opacity: 0;
  transform: translateY(-20px);
`;

export const ContentBox = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "title button"
    "text text";
  align-items: center;

  h3 {
    grid-area: title;

    color: #ffffff;
    font-family: Zilla Slab;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    text-align: center;
    margin: 0 10px 15px;
    line-height: 1.1em;

    transition: 0.5s;
    transition-delay: 0.4s;
    opacity: 0;
    transform: translateY(-20px);
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  span {
    grid-area: text;

    font-size: 14px;
    font-weight: 300;
    font-family: Overpass;
    text-transform: initial;
  }
`;
