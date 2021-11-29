/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from "react";
import { Summary } from "../summary";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { bindActionCreators } from "redux";
import { Steps } from "../../components/steps";
import ModalContent from "../../components/modal";
import { actionCreators } from "../../../../state";
import { Receipt } from "../../components/receipt";
import { Progress } from "../../components/progress";
import data from "../../components/form/data/data.json";
import {
  ButtonSummary,
  Container,
  ContainerAll,
  ContainerSummary,
  ContainerModal,
  Main,
  Title,
  Info,
  Ticket,
} from "./style";
import { IInitialstate } from "../../../../state/state";

const values: { [key: string]: any } = {};

for (const input of data) {
  values[input.label] = input.value;
}

export const Information = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const { ticket } = bindActionCreators(actionCreators, dispatch);
  const [valueInfo, setValueInfo] = useState<any>(values);

  const valueInput = (text: any) => {
    localStorage.setItem("text", JSON.stringify(text));
    setValueInfo(text);
  };
  let value: any = localStorage.getItem("text");
  let text = JSON.parse(value);

  const sendTicket = () => {
    ticket(valueInfo);
    navigate("/resumen");
  };

  const modal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ width: "100%" }}>
      <Container>
        <Progress />
        <ContainerAll>
          <Steps
            valueInput={valueInput}
            sendTicket={sendTicket}
            valueInfo={valueInfo}
          />
          <Receipt valueInfo={valueInfo} />
        </ContainerAll>
        <ContainerSummary>
          <ButtonSummary onClick={modal}>Resumen</ButtonSummary>
        </ContainerSummary>
        <ModalContent isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
          <ContainerModal>
            <Main>Resumen</Main>
            {data.map((value) => (
              <Ticket key={value.label}>
                <div>
                  <Title>{value.label}</Title>
                  <Info>
                    {valueInfo ? valueInfo[value.name] : text[value.name]}
                  </Info>
                </div>
              </Ticket>
            ))}
          </ContainerModal>
        </ModalContent>
      </Container>
    </div>
  );
};

export default Information;
