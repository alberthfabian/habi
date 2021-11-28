import styled from "styled-components";
import { black } from "../../../../style";

export const ProgressBar = styled.progress`
  width: 250px;
  height: 40px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Step = styled.div`
  margin-right: 10px;
  color: ${black};
`;
