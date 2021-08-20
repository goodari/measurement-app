import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { latestMeasurementSelector } from "../../state/measurement/selectors";
import {
  clearMeasurements,
  createMeasurement,
} from "../../state/measurement/slice";
import { MeasurementService } from "../../utils/MeasurementService";

const MeasurePage: FunctionComponent<void> = () => {
  const dispatch = useDispatch();
  const lastMeasurement = useSelector(latestMeasurementSelector);

  const measurementService = new MeasurementService();

  const measure = (value?: number) => {
    if (!value) {
      value = measurementService.generateRandomMeasurement();
    }

    dispatch(createMeasurement(value));
  };

  const clear = () => {
    dispatch(clearMeasurements());
  };

  return (
    <div className="flex flex-col items-center">
      <div>{lastMeasurement?.value || 0}</div>

      <div className="flex flex-row gap-3">
        <button className="button-primary" onClick={() => measure()}>
          Measure
        </button>
        <button className="button-primary" onClick={() => clear()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default MeasurePage;
