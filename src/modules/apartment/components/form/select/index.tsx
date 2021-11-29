import { ErrorMessage, useField } from "formik";
import { ContainerLabel, ContainerSelect, Error, SelectValue } from "./style";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const Select = ({ label, options, ...props }: Props) => {
  const [field] = useField(props);
  return (
    <div>
      <ContainerLabel>
        <label htmlFor={props.name}>{label}</label>
      </ContainerLabel>
      <ContainerSelect>
        <div>
          <SelectValue {...field} {...props}>
            <option value="">Seleccione una opción</option>
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
