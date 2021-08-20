import { ReactNode } from "react";
import { RouteComponentProps } from "react-router-dom";
import MeasurePage from "../pages/MeasurePage";

interface Route {
  label: string;
  path: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

export const routes: Route[] = [
  {
    label: "Measure",
    path: "/measure",
    component: MeasurePage,
  },
];
