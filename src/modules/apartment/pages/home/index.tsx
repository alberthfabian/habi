import { Hero, Container, ContainerImg, Button, Title } from "./style";
import { useDispatch } from "react-redux";
import apartment from "../../../../assets/img/apartment.jpg";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../state";

export const Home = () => {
  const dispatch = useDispatch();

  const { steps } = bindActionCreators(actionCreators, dispatch);

  return (
    <Container>
      <div>
        <Hero src={apartment} alt="Hero" />
      </div>
      <ContainerImg>
        <Title>¡Te compramos tu apartamento en 10 días!</Title>
        <Button to={"/datos-cliente"} onClick={() => steps(1)}>
          Vender
        </Button>
      </ContainerImg>
    </Container>
  );
};

export default Home;
