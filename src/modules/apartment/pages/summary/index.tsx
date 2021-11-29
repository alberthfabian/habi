import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { IInitialstate } from "../../../../state/state";
import data from "../../components/form/data/data.json";
import {
  Ticket,
  Title,
  Info,
  Div,
  Main,
  Container,
  ContainerButton,
  Button,
} from "./style";

interface IOption {
  setIsOpen?: Function;
}

export const Summary = ({ setIsOpen }: IOption) => {
  const navigate = useNavigate();
  const ticketValues: any = useSelector(
    (state: IInitialstate) => state.ticket.ticket
  );

  const returnHome = () => {
    if (setIsOpen) setIsOpen(false);
    navigate("/inicio");
  };

  return (
    <Div>
      <div style={{ height: "100%" }}>
        <Container>
          <Main>Resumen</Main>
          {data.map((value) => (
            <Ticket key={value.label}>
              <div>
                <Title>{value.label}</Title>
                <Info>{ticketValues[value.name]}</Info>
              </div>
            </Ticket>
          ))}
        </Container>
        <ContainerButton>
          <Button onClick={returnHome}>Regresar al Inicio</Button>
        </ContainerButton>
      </div>
    </Div>
  );
};

export default Summary;
