import { ErrorMessage, useField } from "formik";
import {
  ContainerInput,
  ContainerLabel,
  InputStyle,
  Error,
  DivInput,
  DivContainer,
} from "./style";

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
        <label htmlFor={props.id || props.name}>
          <b>{label}</b>
        </label>
      </ContainerLabel>
      <ContainerInput>
        <DivContainer>
          <DivInput>
            <InputStyle {...field} {...props} />
          </DivInput>
          <Error>
            <ErrorMessage name={props.name} component="span" />
          </Error>
        </DivContainer>
      </ContainerInput>
    </div>
  );
};
