import React, { FunctionComponent } from "react";
import { Measurement } from "../../state/measurement/types";

type PropType = {
  measurements: Measurement[];
};

const MeasurementList: FunctionComponent<PropType> = ({ measurements }) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="w-1/2">Date</th>
          <th className="w-1/2">Value</th>
        </tr>
      </thead>
      <tbody>
        {measurements.map((measurement) => (
          <tr>
            <td>{measurement.date}</td>
            <td>{measurement.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MeasurementList;
