import styled from "styled-components";
import { blackCoffee, white } from "../../../../style";

export const HeaderDiv = styled.div`
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${blackCoffee};
  position: absolute;
  width: 100%;
  z-index: 20;
`;

export const HeaderInfo = styled.div`
  display: flex;
  color: ${white};
`;
