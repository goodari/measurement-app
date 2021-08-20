import { mockMeasurements } from "../../test/measurement";
import { measurementSumSelector } from "./selectors";

describe("Measurement selectors", () => {
  describe("measurementSumSelector", () => {
    it("should calculate sum properly", () => {
      const selected = measurementSumSelector.resultFunc(mockMeasurements);

      expect(selected).toEqual(4666);
    });
  });
});
