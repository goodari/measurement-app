import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  latestMeasurementSelector,
  measurementsLoadingSelector,
  measurementSumSelector,
} from "../../state/measurement/selectors";
import {
  clearMeasurements,
  createMeasurement,
  fetchMeasurements,
} from "../../state/measurement/slice";
import { MeasurementService } from "../../utils/MeasurementService";

const MeasurePage: FunctionComponent<void> = () => {
  const dispatch = useDispatch();
  const lastMeasurement = useSelector(latestMeasurementSelector);
  const measurementSum = useSelector(measurementSumSelector);
  const measurementsLoading = useSelector(measurementsLoadingSelector);

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

  useEffect(() => {
    dispatch(fetchMeasurements());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-lg font-bold my-3">
        {measurementsLoading ? (
          "Loading..."
        ) : (
          <>{lastMeasurement?.value || 0} kg</>
        )}
      </div>
      <div className="my-2">Sum: {measurementSum || 0} kg</div>

      <div className="flex flex-row gap-3">
        <button
          className="button-primary"
          onClick={() => measure()}
          disabled={measurementsLoading}
        >
          Measure
        </button>
        <button
          className="button-primary"
          onClick={() => clear()}
          disabled={measurementsLoading}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default MeasurePage;
