import { ContainerTicket, Ticket, Title, Info, Detail } from "./style";
import data from "../../components/form/data/data.json";

export const Receipt = ({ valueInfo }: any) => {
  return (
    <ContainerTicket>
      <Detail>Detalle</Detail>
      {data.map((value) => (
        <Ticket key={value.label}>
          <div>
            <Title>{value.label}</Title>
            <Info>{valueInfo[value.name]}</Info>
          </div>
        </Ticket>
      ))}
    </ContainerTicket>
  );
};
