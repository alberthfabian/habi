/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { bindActionCreators } from "redux";
import { Steps } from "../../components/steps";
import { Container, ContainerAll } from "./style";
import { actionCreators } from "../../../../state";
import { Receipt } from "../../components/receipt";
import { Progress } from "../../components/progress";
import data from "../../components/form/data/data.json";

const values: { [key: string]: any } = {};

for (const input of data) {
  values[input.label] = input.value;
}

export const Information = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ticket } = bindActionCreators(actionCreators, dispatch);

  const [valueInfo, setValueInfo] = useState<any>(values);

  const valueInput = (text: any) => {
    setValueInfo(text);
  };

  const sendTicket = () => {
    ticket(valueInfo);
    navigate("/resumen");
  };

  return (
    <Container>
      <Progress />
      <ContainerAll>
        <Steps valueInput={valueInput} sendTicket={sendTicket} />
        <Receipt valueInfo={valueInfo} />
      </ContainerAll>
    </Container>
  );
};

export default Information;
