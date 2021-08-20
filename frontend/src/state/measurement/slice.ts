import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  deleteMeasurements,
  getMeasurements,
  postMeasurement,
} from "../../api/measurement";
import { generateID } from "../../utils/id";
import { MeasurementState } from "./types";

export interface CounterState {
  value: number;
}

const initialState: MeasurementState = {
  measurements: [],
  loading: false,
};

const createMeasurement = createAsyncThunk(
  "measurements/create",
  async (value: number) => {
    const response = await postMeasurement(value);

    return response.data;
  }
);

const fetchMeasurements = createAsyncThunk("measurements/fetch", async () => {
  const response = await getMeasurements();

  return response.data;
});

const clearMeasurements = createAsyncThunk("measurements/delete", async () => {
  const response = await deleteMeasurements();

  return response.data;
});

export const measurementSlice = createSlice({
  name: "measurement",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(createMeasurement.fulfilled, (state, action) => {
        state.measurements.push(action.payload);
      })
      .addCase(fetchMeasurements.fulfilled, (state, action) => {
        state.measurements = action.payload.measurements;
      })
      .addCase(clearMeasurements.fulfilled, (state, action) => {
        state.measurements = action.payload.measurements;
      })
      .addMatcher(
        isAnyOf(
          createMeasurement.pending,
          fetchMeasurements.pending,
          clearMeasurements.pending
        ),
        (state, action) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          createMeasurement.fulfilled,
          fetchMeasurements.fulfilled,
          clearMeasurements.fulfilled
        ),
        (state, action) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          createMeasurement.rejected,
          fetchMeasurements.rejected,
          clearMeasurements.rejected
        ),
        (state, action) => {
          state.error = { id: generateID(), label: "Unknown error happened" }; // TODO: Handle error cases
          state.loading = false;
        }
      ),
});

export { createMeasurement, fetchMeasurements, clearMeasurements };

export default measurementSlice.reducer;
