import { axiosInstance } from "./axiosInstance";

const MEASUREMENT_URL = "/measurements";

export const postMeasurement = (value: number) =>
  axiosInstance.post(`${MEASUREMENT_URL}`, { value });
