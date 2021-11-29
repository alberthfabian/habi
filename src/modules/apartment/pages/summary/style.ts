import styled from "styled-components";
import { black, primary, blueMunsell, white, fourth } from "../../../../style";

export const Ticket = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Title = styled.div`
  font-size: 18px;
  text-align: left;
`;

export const Info = styled.div`
  height: 40px;
  text-align: initial;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  height: 650px;
`;

export const Main = styled.h1`
  font-size: 30px;
  color: ${black};
`;

export const Container = styled.div`
  padding: 10px 30px;
  border: 1px solid ${primary};
  border-radius: 10px;
  background-color: ${blueMunsell};
  height: "100%";
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  margin-top: 20px;
  background-color: ${primary};
  color: ${white};
  padding: 15px;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  :hover {
    background-color: ${fourth};
  }
`;
