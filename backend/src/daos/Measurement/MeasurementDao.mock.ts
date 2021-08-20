import { IMeasurement } from "@entities/Measurement";
import { getRandomInt } from "@shared/functions";
import { IMeasurementDao } from "./MeasurementDao";
import MockDaoMock from "../MockDb/MockDao.mock";

class MeasurementDao extends MockDaoMock implements IMeasurementDao {
  public async getAll(): Promise<IMeasurement[]> {
    const db = await super.openDb();
    return db.measurements;
  }

  public async add(measurement: IMeasurement): Promise<void> {
    const db = await super.openDb();
    measurement.id = getRandomInt();
    db.measurements.push(measurement);
    await super.saveDb(db);
  }

  public async clear(): Promise<void> {
    const db = await super.openDb();
    db.measurements = [];
    await super.saveDb(db);
  }
}

export default MeasurementDao;
