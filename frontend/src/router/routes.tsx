import { ReactNode } from "react";
import MeasurePage from "../pages/MeasurePage";

interface Route {
  label: string;
  path: string;
  component: ReactNode;
}

export const routes: Route[] = [
  {
    label: "Measure",
    path: "/measure",
    component: MeasurePage,
  },
];
