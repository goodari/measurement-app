import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import { Measurement, UIError } from "./types";
import { sortByDate, Order } from "../../utils/measurement";

export const measurementsSelector = (state: RootState): Measurement[] =>
  state.measurement.measurements;

export const latestMeasurementSelector = createSelector(
  measurementsSelector,
  (measurements) => {
    const sorted = [...measurements].sort(sortByDate(Order.DESC));
    return sorted[0];
  }
);

export const measurementSumSelector = createSelector(
  measurementsSelector,
  (measurements) => {
    return measurements.reduce(
      (sum, measurement) => (sum += measurement.value),
      0
    );
  }
);

export const measurementsLoadingSelector = (state: RootState): boolean =>
  state.measurement.loading;

export const measurementErrorSelector = (
  state: RootState
): UIError | undefined => state.measurement.error;
