import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

export interface IRoute {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
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

export const routes: IRoute[] = [
  {
    to: "/inicio",
    path: "/inicio",
    Component: Home,
    name: "Inicio",
  },
  {
    to: "/:route",
    path: "datos-cliente",
    Component: Information,
    name: "Información",
  },
];