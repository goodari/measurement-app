import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MeasurementError from "../../components/MeasurementError";
import MeasurementList from "../../components/MeasurementList";
import {
  measurementsLoadingSelector,
  measurementsSelector,
} from "../../state/measurement/selectors";
import { fetchMeasurements } from "../../state/measurement/slice";

const MeasurementListPage: FunctionComponent<void> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeasurements());
  }, [dispatch]);

  const measurements = useSelector(measurementsSelector);
  const measurementsLoading = useSelector(measurementsLoadingSelector);

  return (
    <div>
      <MeasurementError />
      {measurementsLoading && measurements.length === 0 ? (
        <div className="text-center my-4 text-xl">Loading...</div>
      ) : (
        <MeasurementList measurements={measurements} />
      )}
    </div>
  );
};

export default MeasurementListPage;
