import styled from "styled-components";
import { brown, brownLight, white } from "../../../../style";

export const ContaninerInfo = styled.div`
  width: 70%;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 150px;
  height: 60px;
  border-radius: 10px;
  background-color: ${brown};
  :hover {
    background-color: ${brownLight};
  }
  cursor: pointer;
  color: ${white};
  font-size: 20px;
`;

export const InputControl = styled.div`
  display: block;
`;
