import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postMeasurement } from "../../api/measurement";
import { MeasurementState } from "./types";

export interface CounterState {
  value: number;
}

const initialState: MeasurementState = {
  measurements: [],
};

const createMeasurement = createAsyncThunk(
  "measurements/create",
  async (value: number) => {
    const response = await postMeasurement(value);

    return response.data;
  }
);

export const measurementSlice = createSlice({
  name: "measurement",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(createMeasurement.fulfilled, (state, action) => {
      state.measurements.push(action.payload);
    }),
});

export { createMeasurement };

export default measurementSlice.reducer;
