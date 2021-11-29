import { useSelector } from "react-redux";
import { ProgressBar, Div, Step } from "./style";
import { IInitialstate } from "../../../../state/state";
import data from "../../components/form/data/data.json";

export const Progress = () => {
  const step = useSelector((state: IInitialstate) => state.steps.steps);
  const valueStep = localStorage.getItem("step") || "";
  return (
    <Div>
      <Step>{`Paso: ${valueStep !== "" ? valueStep : step}`}</Step>
      <ProgressBar
        max={data.length}
        value={valueStep !== "" ? valueStep : step}
      >
        {step}
      </ProgressBar>
    </Div>
  );
};
