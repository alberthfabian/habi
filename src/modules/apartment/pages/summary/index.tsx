import { useSelector } from "react-redux";
import data from "../../components/form/data/data.json";
import { IInitialstate } from "../../../../state/state";
import { Ticket, Title, Info } from "./style";

export const Summary = () => {
  const ticketValues: any = useSelector(
    (state: IInitialstate) => state.ticket.ticket
  );

  return (
    <div>
      <div>Resumen</div>
      {data.map((value) => (
        <Ticket key={value.label}>
          <div>
            <Title>{value.label}</Title>
            <Info>{ticketValues[value.name]}</Info>
          </div>
        </Ticket>
      ))}
    </div>
  );
};

export default Summary;
