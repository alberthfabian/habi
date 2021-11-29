import {
  ContainerTicket,
  Ticket,
  Title,
  Info,
  Detail,
  DivTicket,
} from "./style";
import data from "../../components/form/data/data.json";

export const Receipt = ({ valueInfo }: any) => {
  let value: any = localStorage.getItem("text");
  let text = JSON.parse(value);

  return (
    <ContainerTicket>
      <Detail>
        <b>Detalle</b>
      </Detail>
      <br />
      {data.map((value) => (
        <Ticket key={value.label}>
          <DivTicket>
            <Title>
              <b>{value.label}</b>
            </Title>
            <Info>
              {text === null ? valueInfo[value?.name] : text[value?.name]}
            </Info>
          </DivTicket>
        </Ticket>
      ))}
    </ContainerTicket>
  );
};
