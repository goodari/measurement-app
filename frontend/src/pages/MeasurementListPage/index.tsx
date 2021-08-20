import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MeasurementList from "../../components/MeasurementList";
import { measurementsSelector } from "../../state/measurement/selectors";
import { fetchMeasurements } from "../../state/measurement/slice";

const MeasurementListPage: FunctionComponent<void> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeasurements());
  }, [dispatch]);

  const measurements = useSelector(measurementsSelector);

  return (
    <div>
      <MeasurementList measurements={measurements} />
    </div>
  );
};

export default MeasurementListPage;
