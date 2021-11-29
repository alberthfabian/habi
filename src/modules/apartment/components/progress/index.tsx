import { useSelector } from "react-redux";
import { IInitialstate } from "../../../../state/state";
import { ProgressBar, Div, Step } from "./style";

export const Progress = () => {
  const step = useSelector((state: IInitialstate) => state.steps.steps);
  const valueStep = localStorage.getItem("step") || "";
  return (
    <Div>
      <Step>{`Paso: ${valueStep !== "" ? valueStep : step}`}</Step>
      <ProgressBar max="100" value={valueStep !== "" ? valueStep : step}>
        {step}
      </ProgressBar>
    </Div>
  );
};
