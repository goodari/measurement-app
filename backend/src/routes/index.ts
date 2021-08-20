import { Router } from "express";
import { getAllMeasurements, addOneMeasurement } from "./Measurements";

// Measurement-route
const measurementRouter = Router();
measurementRouter.get("/", getAllMeasurements);
measurementRouter.post("/", addOneMeasurement);

// Export the base-router
const baseRouter = Router();
baseRouter.use("/measurements", measurementRouter);
export default baseRouter;
