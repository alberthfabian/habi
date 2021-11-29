import { ErrorMessage, useField } from "formik";
import { ContainerInput, ContainerLabel, InputStyle, Error } from "./style";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

export const Input = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <div>
      <ContainerLabel>
        <label htmlFor={props.id || props.name}>{label}</label>
      </ContainerLabel>
      <ContainerInput>
        <div>
          <div>
            <InputStyle {...field} {...props} />
          </div>
          <Error>
            <ErrorMessage name={props.name} component="span" />
          </Error>
        </div>
      </ContainerInput>
    </div>
  );
};
