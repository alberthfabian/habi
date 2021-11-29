import styled from "styled-components";
import {
  black,
  blueMunsell,
  DEVICE,
  fourth,
  primary,
  white,
} from "../../../../style";

export const Container = styled.div`
  padding-top: 56px;
  text-align: center;
  width: "100%";
  height: 100%;
`;

export const ContainerModal = styled.div`
  padding: 10px 30px;
  border: 1px solid ${primary};
  border-radius: 10px;
  background-color: ${blueMunsell};
  height: "100%";
`;

export const ContainerAll = styled.div`
  display: flex;
  justify-content: center;
  width: "100%";
`;

export const ContainerSummary = styled.div`
  margin-top: 30px;
  display: none;
  @media ${DEVICE.mobileL} {
    display: flex;
    justify-content: center;
  }
`;

export const ButtonSummary = styled.button`
  height: 50px;
  border-radius: 10px;
  background-color: ${primary};
  :hover {
    background-color: ${fourth};
  }
  cursor: pointer;
  color: ${white};
  font-size: 20px;
`;

export const Main = styled.h1`
  font-size: 30px;
  color: ${black};
`;

export const Title = styled.div`
  font-size: 18px;
  text-align: left;
`;

export const Info = styled.div`
  height: 40px;
  text-align: initial;
`;

export const Ticket = styled.div`
  display: flex;
  justify-content: flex-start;
`;
