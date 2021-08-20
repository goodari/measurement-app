import { mockMeasurements } from "../test/measurement";
import { Order, sortByDate, sortByValue } from "./measurement";

describe("Measurement utils", () => {
  describe("Sorting", () => {
    const tests = [
      {
        label: "sortByDate ASC",
        func: sortByDate(Order.ASC),
        expectedResult: [
          {
            date: "2021-06-01T11:08:59.028Z",
            value: 321,
            id: 159123164363,
          },
          {
            date: "2021-07-22T17:08:59.028Z",
            value: 2345,
            id: 159123164365,
          },
          {
            date: "2021-08-20T07:08:59.028Z",
            value: 2000,
            id: 159123164363,
          },
        ],
      },
      {
        label: "sortByDate DESC",
        func: sortByDate(Order.DESC),
        expectedResult: [
          {
            date: "2021-08-20T07:08:59.028Z",
            value: 2000,
            id: 159123164363,
          },
          {
            date: "2021-07-22T17:08:59.028Z",
            value: 2345,
            id: 159123164365,
          },
          {
            date: "2021-06-01T11:08:59.028Z",
            value: 321,
            id: 159123164363,
          },
        ],
      },
      {
        label: "sortByValue ASC",
        func: sortByValue(Order.ASC),
        expectedResult: [
          {
            date: "2021-06-01T11:08:59.028Z",
            value: 321,
            id: 159123164363,
          },
          {
            date: "2021-08-20T07:08:59.028Z",
            value: 2000,
            id: 159123164363,
          },

          {
            date: "2021-07-22T17:08:59.028Z",
            value: 2345,
            id: 159123164365,
          },
        ],
      },
      {
        label: "sortByValue DESC",
        func: sortByValue(Order.DESC),
        expectedResult: [
          {
            date: "2021-07-22T17:08:59.028Z",
            value: 2345,
            id: 159123164365,
          },
          {
            date: "2021-08-20T07:08:59.028Z",
            value: 2000,
            id: 159123164363,
          },
          {
            date: "2021-06-01T11:08:59.028Z",
            value: 321,
            id: 159123164363,
          },
        ],
      },
    ];

    tests.forEach((test) => {
      it(test.label, () => {
        expect(mockMeasurements.sort(test.func)).toEqual(test.expectedResult);
      });
    });
  });
});
