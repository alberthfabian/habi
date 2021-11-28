import { useEffect, useState } from "react";
import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import { bankrupt } from "./state/action-creators";

const App = () => {
  const dispatch = useDispatch();
  // const [value, setValue] = useState();
  const amount = useSelector((state: State) => state.bank);

  // useEffect(() => {
  //   setValue(steps);
  // }, [steps]);

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const enviar = () => {
    //   dispatch(fetchSteps(1));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>{"Hola"}</p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Enviar</button>
      <button onClick={() => withdrawMoney(500)}>Enviar</button>
      <button onClick={() => bankrupt()}>Enviar</button>
    </div>
  );
};

export default App;
