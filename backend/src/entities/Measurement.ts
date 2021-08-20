export interface IMeasurement {
  id: number;
  date: string; // TODO: Type correctly
  value: number;
}

class Measurement implements IMeasurement {
  public id: number;
  public date: string;
  public value: number;

  constructor(valueOrMeasurement: number | IMeasurement, id?: number) {
    if (typeof valueOrMeasurement === "number") {
      this.value = valueOrMeasurement;
      this.date = new Date().toISOString();
      this.id = id || -1;
    } else {
      this.value = valueOrMeasurement.value;
      this.date = valueOrMeasurement.date;
      this.id = valueOrMeasurement.id;
    }
  }
}

export default Measurement;
