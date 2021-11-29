import styled from "styled-components";
import { brown } from "../../../../style";

export const ContainerTicket = styled.div`
  width: 30%;
  border-left: 2px solid ${brown};
  height: 100vw;
  padding: 20px;
`;

export const Ticket = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Title = styled.div`
  font-size: 20px;
  text-align: left;
`;

export const Info = styled.div`
  height: 50px;
  text-align: initial;
`;

export const Detail = styled.div`
  font-size: 30px;
`;
