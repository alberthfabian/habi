import styled from "styled-components";
import { primary, white } from "../../../../style";

export const HeaderDiv = styled.div`
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${primary};
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const HeaderInfo = styled.div`
  display: flex;
  color: ${white};
`;
