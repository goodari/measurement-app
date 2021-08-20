export interface Measurement {
  date: string;
  value: number;
}

export interface MeasurementState {
  measurements: Measurement[];
  loading: boolean;
  error?: UIError;
}

export interface UIError {
  id: string;
  label: string;
}
