/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { ContainerPage } from "../containerPage";
import { useEffect, useState } from "react";
import data from "../../components/form/data/data.json";
import {
  ContaninerInfo,
  InputControl,
  Info,
  For,
  Button,
  ButtonLink,
  ButtonContainer,
} from "./style";
import "./styles.css";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../state";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

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

export const Steps = ({ valueInput, sendTicket, valueInfo }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { steps } = bindActionCreators(actionCreators, dispatch);
  const [newData, setNewData] = useState<any>([]);
  const [newPath, setNewPath] = useState<any>([]);

  const order = localStorage.getItem("step") || "";

  const valueCant: any = [];

  useEffect(() => {
    for (const info of data) {
      if (parseInt(info.order) <= parseInt(order)) {
        const dataInfo = info;
        valueCant.push(dataInfo);
      }
      if (
        parseInt(order) <= data.length &&
        parseInt(info.order) === parseInt(order) + 1
      ) {
        const dataInfo = info;
        setNewPath([dataInfo]);
      }
    }
    setNewData(valueCant);
    localStorage.setItem("new", JSON.stringify(valueCant));
  }, [order]);

  let value: any = localStorage.getItem("new");
  let newValue: any = JSON.parse(value);

  const check = () => {
    steps(1);
    navigate(newPath[0].path);
  };

  return (
    <ContaninerInfo>
      <Info>
        <For>
          <h1>Formulario de registro</h1>
          {newData.length !== 0 && newValue && (
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
                    {newValue.map(
                      ({ type, name, placeholder, label, options }: any) => (
                        <ContainerPage
                          type={type}
                          name={name}
                          placeholder={placeholder}
                          label={label}
                          options={options}
                        />
                      )
                    )}
                  </InputControl>
                  <ButtonContainer>
                    {parseInt(order) < data.length && (
                      <div>
                        <Button onClick={() => check()} type="submit">
                          Siguiente
                        </Button>
                      </div>
                    )}
                    {data.length === parseInt(order) && (
                      <div>
                        <Button type="submit">Enviar datos</Button>
                      </div>
                    )}
                  </ButtonContainer>
                </Form>
              )}
            </Formik>
          )}
        </For>
      </Info>
    </ContaninerInfo>
  );
};

export default Steps;
