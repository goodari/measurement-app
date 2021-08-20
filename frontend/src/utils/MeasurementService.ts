const minMeasurement = 200;
const maxMeasurement = 6000;

export class MeasurementService {
  generateRandomMeasurement() {
    return getRandomInt(minMeasurement, maxMeasurement);
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
