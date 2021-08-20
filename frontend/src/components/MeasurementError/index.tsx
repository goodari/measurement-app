import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { measurementErrorSelector } from "../../state/measurement/selectors";
import ErrorMessage from "../ErrorMessage";

const MeasurementError: FunctionComponent = () => {
  const error = useSelector(measurementErrorSelector);

  return error ? <ErrorMessage error={error} /> : null;
};

export default MeasurementError;
