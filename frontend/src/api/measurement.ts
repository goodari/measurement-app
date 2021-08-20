import { axiosInstance } from "./axiosInstance";

const MEASUREMENT_URL = "/measurements";

export const postMeasurement = (value: number) =>
  axiosInstance.post(`${MEASUREMENT_URL}`, { value });

export const getMeasurements = () => axiosInstance.get(`${MEASUREMENT_URL}`);

export const deleteMeasurements = () =>
  axiosInstance.delete(`${MEASUREMENT_URL}`);
