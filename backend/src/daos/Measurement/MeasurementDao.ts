import { IMeasurement } from "@entities/Measurement";

export interface IMeasurementDao {
  getAll: () => Promise<IMeasurement[]>;
  add: (measurement: IMeasurement) => Promise<void>;
}

class MeasurementDao implements IMeasurementDao {
  public getAll(): Promise<IMeasurement[]> {
    // TODO
    return Promise.resolve([]);
  }

  public async add(measurement: IMeasurement): Promise<void> {
    // TODO
    return Promise.resolve(undefined);
  }

  public async clear(): Promise<void> {
    // TODO
    return Promise.resolve(undefined);
  }
}

export default MeasurementDao;
