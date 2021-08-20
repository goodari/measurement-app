import supertest from "supertest";
import StatusCodes from "http-status-codes";
import { SuperTest, Test } from "supertest";

import app from "@server";
import MeasurementDao from "@daos/Measurement/MeasurementDao.mock";
import Measurement, { IMeasurement } from "@entities/Measurement";
import { pErr } from "@shared/functions";
import { paramMissingError } from "@shared/constants";
import { IReqBody, IResponse } from "../support/types";

describe("Measurement Routes", () => {
  const measeurementsPath = "/api/measurements";
  const getMeasurementsPath = `${measeurementsPath}/`;
  const addMeasurementsPath = `${measeurementsPath}/`;

  const { BAD_REQUEST, CREATED, OK } = StatusCodes;
  let agent: SuperTest<Test>;

  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  describe(`"GET:${getMeasurementsPath}"`, () => {
    it(`should return a JSON object with all the measurements and a status code of "${OK}" if the
            request was successful.`, (done) => {
      // Setup spy
      const measurements = [
        new Measurement(12321),
        new Measurement(43214),
        new Measurement(2342),
      ];
      spyOn(MeasurementDao.prototype, "getAll").and.returnValue(
        Promise.resolve(measurements)
      );
      // Call API
      agent.get(getMeasurementsPath).end((err: Error, res: IResponse) => {
        pErr(err);
        expect(res.status).toBe(OK);
        // Caste instance-objects to 'Measurement' objects
        const respMeasurements = res.body.measurements;
        const retMeasurements: Measurement[] = respMeasurements.map(
          (measurement: IMeasurement) => {
            return new Measurement(measurement);
          }
        );
        expect(retMeasurements).toEqual(measurements);
        expect(res.body.error).toBeUndefined();
        done();
      });
    });

    it(`should return a JSON object containing an error message and a status code of
            "${BAD_REQUEST}" if the request was unsuccessful.`, (done) => {
      // Setup spy
      const errMsg = "Could not fetch measurements.";
      spyOn(MeasurementDao.prototype, "getAll").and.throwError(errMsg);
      // Call API
      agent.get(getMeasurementsPath).end((err: Error, res: IResponse) => {
        pErr(err);
        expect(res.status).toBe(BAD_REQUEST);
        expect(res.body.error).toBe(errMsg);
        done();
      });
    });
  });

  describe(`"POST:${addMeasurementsPath}"`, () => {
    const callApi = (reqBody: IReqBody) => {
      return agent.post(addMeasurementsPath).type("form").send(reqBody);
    };

    const measurementData = {
      value: 123,
    };

    it(`should return a status code of "${CREATED}" if the request was successful.`, (done) => {
      // Setup Spy
      spyOn(MeasurementDao.prototype, "add").and.returnValue(Promise.resolve());
      // Call API
      agent
        .post(addMeasurementsPath)
        .type("form")
        .send(measurementData)
        .end((err: Error, res: IResponse) => {
          pErr(err);
          expect(res.status).toBe(CREATED);
          expect(res.body.error).toBeUndefined();
          done();
        });
    });

    it(`should return a JSON object with an error message of "${paramMissingError}" and a status
            code of "${BAD_REQUEST}" if the measurement param was missing.`, (done) => {
      // Call API
      callApi({}).end((err: Error, res: IResponse) => {
        pErr(err);
        expect(res.status).toBe(BAD_REQUEST);
        expect(res.body.error).toBe(paramMissingError);
        done();
      });
    });

    it(`should return a JSON object with an error message and a status code of "${BAD_REQUEST}"
            if the request was unsuccessful.`, (done) => {
      // Setup spy
      const errMsg = "Could not add measurement.";
      spyOn(MeasurementDao.prototype, "add").and.throwError(errMsg);
      // Call API
      callApi(measurementData).end((err: Error, res: IResponse) => {
        pErr(err);
        expect(res.status).toBe(BAD_REQUEST);
        expect(res.body.error).toBe(errMsg);
        done();
      });
    });
  });
});
