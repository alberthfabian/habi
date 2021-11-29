import * as Yup from "yup";
import { Form, Formik } from "formik";
import Control from "../../components/form/control";
import data from "../../components/form/data/data.json";
import { ContaninerInfo, InputControl, Info, Button } from "./style";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of data) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Mínimo de ${(rule as any).value || 2} caracteres`
      );
    }
    if (rule.type === "email") {
      schema = schema.email(`Revise el formato del email`);
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const Steps = ({ valueInput, sendTicket }: any) => {
  return (
    <ContaninerInfo>
      <Info>
        <div>
          <h1>Dynamic Form</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              sendTicket(values);
            }}
            validate={(values) => {
              valueInput(values);
            }}
          >
            {(formik) => (
              <Form noValidate>
                <InputControl>
                  {data.map(({ type, name, placeholder, label, options }) => (
                    <div>
                      <Control
                        key={name}
                        type={type as any}
                        name={name}
                        label={label}
                        placeholder={placeholder}
                        options={options}
                      />
                      <br />
                    </div>
                  ))}
                </InputControl>
                <div>
                  <div>
                    <Button type="button">Siguiente</Button>
                  </div>
                  <div>
                    <Button type="submit">Enviar datos</Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Info>
    </ContaninerInfo>
  );
};
