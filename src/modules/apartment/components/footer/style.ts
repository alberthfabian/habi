import styled from "styled-components";
import { DEVICE, second } from "../../../../style";

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
  background-color: ${second};
  height: 70px;
`;
