import renderer from "react-test-renderer";
import { mockMeasurements } from "../../test/measurement";
import MeasurementList from "./index";

it("renders correctly", () => {
  const tree = renderer.create(
    <MeasurementList measurements={mockMeasurements} />
  );
  expect(tree).toMatchSnapshot();
});
