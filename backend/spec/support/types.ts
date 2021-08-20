import { Response } from "supertest";
import { IMeasurement } from "@entities/Measurement";

export interface IResponse extends Response {
  body: {
    measurements: IMeasurement[];
    error: string;
  };
}

export interface IReqBody {
  value?: number;
}
