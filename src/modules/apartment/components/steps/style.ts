import styled from "styled-components";
import { Link } from "react-router-dom";
import { primary, white, fourth } from "../../../../style";

export const ContaninerInfo = styled.div`
  width: 100%;
  height: 500px;
  position: inherit;
  overflow: auto;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
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

export const ButtonLink = styled(Link)`
  text-decoration: none;
  height: 50px;
  border-radius: 10px;
  background-color: ${primary};
  :hover {
    background-color: ${fourth};
  }
  cursor: pointer;
  color: ${white};
  font-size: 20px;
  padding: 12px;
`;

export const InputControl = styled.div`
  display: block;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const For = styled.div`
  width: 40%;
`;
