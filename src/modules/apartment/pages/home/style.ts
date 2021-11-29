import styled from "styled-components";
import { black, primary, fourth, white, DEVICE } from "../../../../style";
import { Link } from "react-router-dom";

export const Hero = styled.img`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.8;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerImg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50%;
  text-align: center;
`;

export const Button = styled(Link)`
  background: ${primary};
  padding: 5px 12px 5px 12px;
  border-radius: 10px;
  color: ${white};
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 30px;
  text-decoration: none;
  :hover {
    background-color: ${fourth};
  }
`;

export const Title = styled.div`
  font-size: 50px;
  text-align: center;
  margin-bottom: 40px;
  color: ${black};
  @media ${DEVICE.mobileS} {
    font-size: 25px;
  }
  @media ${DEVICE.mobileM} {
    font-size: 30px;
  }
`;
