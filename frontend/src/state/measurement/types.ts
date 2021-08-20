export interface Measurement {
  date: string;
  value: number;
}

export interface MeasurementState {
  measurements: Measurement[];
}
