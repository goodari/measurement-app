import StatusCodes from "http-status-codes";
import { Request, Response } from "express";

import MeasurementDao from "@daos/Measurement/MeasurementDao.mock";
import { paramMissingError } from "@shared/constants";
import Measurement from "@entities/Measurement";

const measurementDao = new MeasurementDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

/**
 * Get all measurements.
 *
 * @param req
 * @param res
 * @returns
 */
export async function getAllMeasurements(req: Request, res: Response) {
  const measurements = await measurementDao.getAll();
  return res.status(OK).json({ measurements });
}

/**
 * Add one measurement.
 *
 * @param req
 * @param res
 * @returns
 */
export async function addOneMeasurement(req: Request, res: Response) {
  const { value } = req.body;
  if (!value || isNaN(value)) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }

  const numberValue = +value;

  const measurement = new Measurement(numberValue);
  await measurementDao.add(measurement);
  return res.status(CREATED).json(measurement);
}
