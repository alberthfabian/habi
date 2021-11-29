import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

export interface IRoute {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent | any;
  name: string;
}

const Home = lazy(
  () =>
    import(/* webpackChunkName: "Home" */ "../../modules/apartment/pages/home")
);
const Information = lazy(
  () =>
    import(
      /* webpackChunkName: "Information" */ "../../modules/apartment/pages/information"
    )
);
const Summary = lazy(
  () =>
    import(
      /* webpackChunkName: "Summary" */ "../../modules/apartment/pages/summary"
    )
);

const Steps = lazy(
  () =>
    import(
      /* webpackChunkName: "Container" */ "../../modules/apartment/components/steps"
    )
);

export const routes: IRoute[] = [
  {
    to: "/inicio",
    path: "/inicio",
    Component: Home,
    name: "Inicio",
  },
  {
    to: "/:route",
    path: "nombre",
    Component: Information,
    name: "Información",
  },
  {
    to: "/resumen",
    path: "/resumen",
    Component: Summary,
    name: "Resumen",
  },
  {
    to: "/apellido",
    path: "/apellido",
    Component: Information,
    name: "Apellido",
  },
  {
    to: "/correo",
    path: "/correo",
    Component: Information,
    name: "Correo",
  },
  {
    to: "/direccion",
    path: "/direccion",
    Component: Information,
    name: "Direccion",
  },
  {
    to: "/piso",
    path: "/piso",
    Component: Information,
    name: "Piso",
  },
];
