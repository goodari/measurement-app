import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import { Measurement } from "./types";

export const measurementsSelector = (state: RootState): Measurement[] =>
  state.measurement.measurements;

export const latestMeasurementSelector = createSelector(
  measurementsSelector,
  (measurements) => {
    const sorted = [...measurements].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return sorted[0];
  }
);
