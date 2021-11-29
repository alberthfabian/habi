import styled from "styled-components";
import { lightOrange } from "../../../../style";

export const FooterMain = styled.div`
  display: flex;
  justify-content: center;
`;

export const Foot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${lightOrange};
  height: 70px;
`;
