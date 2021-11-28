import { useSelector } from "react-redux";
import { IInitialstate } from "../../../../state/state";
import { ProgressBar, Div, Step } from "./style";

export const Progress = () => {
  const step = useSelector((state: IInitialstate) => state.steps.steps);
  console.log("step", step);
  return (
    <Div>
      <Step>{`Paso: ${step}`}</Step>
      <ProgressBar max="100" value={step}>
        {step}
      </ProgressBar>
    </Div>
  );
};
