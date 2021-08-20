import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Measurement, MeasurementState } from "./types";

export interface CounterState {
  value: number;
}

const initialState: MeasurementState = {
  measurements: [],
};

export const measurementSlice = createSlice({
  name: "measurement",
  initialState,
  reducers: {
    addMeasurement: (state, action: PayloadAction<Measurement>) => {
      state.measurements.push(action.payload); // TODO: Implement post to backend
    },
  },
});

export const { addMeasurement } = measurementSlice.actions;

export default measurementSlice.reducer;
