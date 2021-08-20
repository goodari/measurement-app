import React, { FunctionComponent, useEffect, useState } from "react";
import { Measurement } from "../../state/measurement/types";
import { Order, sortByDate, sortByValue } from "../../utils/measurement";

type PropType = {
  measurements: Measurement[];
};

enum MeasurementColumn {
  Date,
  Value,
}

type Col = {
  id: MeasurementColumn;
  label: string;
  sortFunction: (order: Order) => any;
};

const columns: Col[] = [
  {
    id: MeasurementColumn.Date,
    label: "Date",
    sortFunction: sortByDate,
  },
  {
    id: MeasurementColumn.Value,
    label: "Value",
    sortFunction: sortByValue,
  },
];

const MeasurementList: FunctionComponent<PropType> = ({ measurements }) => {
  const [sortedBy, setSortedBy] = useState(MeasurementColumn.Date);
  const [sortOrder, setSortOrder] = useState(Order.ASC);
  const [sortedMeasurements, setSortedMeasurements] = useState(measurements);

  useEffect(() => {
    setSortedMeasurements(
      [...measurements].sort(
        columns.find((col) => col.id === sortedBy)?.sortFunction(sortOrder)
      )
    );
  }, [sortedBy, sortOrder, measurements]);

  const renderSortIcon = (col: Col) => {
    if (sortedBy !== col.id) {
      return;
    }

    if (sortOrder === Order.ASC) {
      return " \u2193";
    } else {
      return " \u2191";
    }
  };

  const changeOrder = (col: Col) => {
    if (sortedBy !== col.id) {
      setSortedBy(col.id);
      setSortOrder(Order.ASC);
    } else {
      setSortOrder(sortOrder * -1);
    }
  };

  return (
    <table className="w-full mx-10 text-center">
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              className="w-1/2 cursor-pointer"
              onClick={() => changeOrder(col)}
              key={col.label}
            >
              {col.label}
              {renderSortIcon(col)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedMeasurements.map((measurement) => (
          <tr key={measurement.date}>
            <td>{measurement.date}</td>
            <td>{measurement.value} kg</td>
            {/*  // TODO: Get unit from data */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MeasurementList;
