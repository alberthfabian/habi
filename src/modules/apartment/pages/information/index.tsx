import { Progress } from "../../components/progress";
import { Info, Container } from "./style";

export const Information = () => {
  return (
    <Container>
      <Progress />
      <Info>
        <div>Information</div>
      </Info>
    </Container>
  );
};

export default Information;
