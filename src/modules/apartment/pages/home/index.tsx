import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../state";
import { routes } from "../../../../routes/routes";
import { useDispatch, useSelector } from "react-redux";
import data from "../../components/form/data/data.json";
import { IInitialstate } from "../../../../state/state";
import apartment from "../../../../assets/img/apartment.jpg";
import { Hero, Container, ContainerImg, Button, Title } from "./style";

export const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: IInitialstate) => state.steps.steps);

  const { steps } = bindActionCreators(actionCreators, dispatch);

  if (count === data.length) {
    steps(-4);
  }

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Container>
      <div>
        <Hero src={apartment} alt="Hero" />
      </div>
      <ContainerImg>
        <Title>¡Te compramos tu apartamento en 10 días!</Title>
        <Button to={`/${routes[1].path}`} onClick={() => steps(1)}>
          Vender
        </Button>
      </ContainerImg>
    </Container>
  );
};

export default Home;
