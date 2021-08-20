import { Measurement } from "../state/measurement/types";

export enum Order {
  ASC = -1,
  DESC = 1,
}

export const sortByDate = (order: Order = Order.ASC) => (
  a: Measurement,
  b: Measurement
) =>
  (order === Order.ASC ? -1 : 1) *
  (new Date(b.date).getTime() - new Date(a.date).getTime());

export const sortByValue = (order: Order = Order.ASC) => (
  a: Measurement,
  b: Measurement
) => (order === Order.ASC ? -1 : 1) * (a.value < b.value ? 1 : -1);
