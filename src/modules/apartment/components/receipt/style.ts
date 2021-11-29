import styled from "styled-components";
import { DEVICE, primary } from "../../../../style";

export const ContainerTicket = styled.div`
  width: 50%;
  height: 500px;
  padding: 20px;
  position: inherit;
  overflow: auto;
  @media ${DEVICE.mobileL} {
    display: none;
  }
`;

export const Ticket = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 20px;
  text-align: left;
`;

export const Info = styled.div`
  height: 25px;
  text-align: initial;
  border: 2px solid gray;
  border-radius: 6px;
  width: 80%;
  font-size: 20px;
  padding: 10px;
`;

export const Detail = styled.div`
  font-size: 30px;
`;

export const DivTicket = styled.div`
  width: 100%;
`;
