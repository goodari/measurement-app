import { RootState } from "../configureStore";
import { Measurement } from "./types";

export const measurementsSelector = (state: RootState): Measurement[] =>
  state.measurement.measurements;
