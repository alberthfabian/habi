import styled from "styled-components";
import { ruby } from "../../../../../style";

export const ContainerLabelSelect = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
`;

export const ContainerSelect = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Error = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${ruby};
`;

export const SelectValue = styled.select`
  height: 50px;
  width: 100%;
  border: 2px solid gray;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px;
`;
