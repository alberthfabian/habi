import styled from "styled-components";
import { ruby } from "../../../../../style";

export const ContainerLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 4px;
  margin-bottom: 6px;
  font-size: 20px;
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: "center";
  width: 100%;
`;

export const InputStyle = styled.input`
  height: 25px;
  width: 100%;
  font-size: 20px;
  border-radius: 6px;
  padding: 10px;
  border-color: 2px solid gray;
`;

export const Error = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${ruby};
`;

export const DivInput = styled.div`
  width: 100%;
`;

export const DivContainer = styled.div`
  width: 100%;
`;
