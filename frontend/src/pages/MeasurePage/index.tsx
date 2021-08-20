import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { createMeasurement } from "../../state/measurement/slice";
import { MeasurementService } from "../../utils/MeasurementService";

const MeasurePage: FunctionComponent<void> = () => {
  const dispatch = useDispatch();

  const measurementService = new MeasurementService();

  const measure = (value?: number) => {
    if (!value) {
      value = measurementService.generateRandomMeasurement();
    }

    dispatch(createMeasurement(value));
  };

  return (
    <div>
      <button onClick={() => measure()}>Measure</button>
    </div>
  );
};

export default MeasurePage;
