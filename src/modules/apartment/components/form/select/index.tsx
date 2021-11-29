import { ErrorMessage, useField } from "formik";
import {
  ContainerLabelSelect,
  ContainerSelect,
  Error,
  SelectValue,
} from "./style";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const Select = ({ label, options, ...props }: Props) => {
  const [field] = useField(props);
  return (
    <div style={{ width: "100%" }}>
      <ContainerLabelSelect>
        <label htmlFor={props.name}>
          <b>{label}</b>
        </label>
      </ContainerLabelSelect>
      <ContainerSelect>
        <div style={{ width: "100%" }}>
          <SelectValue {...field} {...props}>
            <option style={{ width: "100%" }} value="">
              Seleccione una opción
            </option>
            {options?.map((opt: any) => (
              <option key={opt.id} value={opt.label}>
                {opt.label}
              </option>
            ))}
          </SelectValue>
        </div>
      </ContainerSelect>
      <Error>
        <ErrorMessage name={props.name} component="span" />
      </Error>
    </div>
  );
};
