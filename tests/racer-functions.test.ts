import {Racer} from "../interfaces/IRacer";
import { GasCar } from "../interfaces/GasCar";
import { SolarCar } from "../interfaces/Solarcars";
import {getFasterRacer, findAverageSpeed, findRacersWithEmptyFuel,} from "../Racerfunctions/racer-functions"

describe("find average speed", () => {
  test('returns 0 when all cars have 0 speed', () => {
    let Car1 = new GasCar('Team A', 0);
    let Car2 = new GasCar('Team B', 0);
    let Car3 = new GasCar('Team C', 0);
    let racers = [Car1, Car2, Car3];
    let result = findAverageSpeed(racers);
    expect(result).toBe(0);
  });

  
  test('returns 0 when array is empty', () => {
    let racers: Racer[] = [];
    let result = findAverageSpeed(racers);
    expect(result).toBe(0);
  });
  
  test('should return the average speed of an array of GasCars', () => {
      let Car1 = new GasCar('Team A', 10);
      Car1.accelerate()
      Car1.accelerate()
      let Car2 = new GasCar('Team B', 10);
      Car2.accelerate()
      Car2.accelerate()
      let Car3 = new GasCar('Team C', 10);
      Car3.accelerate()
      Car3.accelerate()
      let racers = [Car1, Car2, Car3];

      let result = findAverageSpeed(racers);
      expect(result).toBe(4);
    });

    test('should return the average speed of an array of GasCars', () => {
      let Car1 = new GasCar('Team A', 10);
      Car1.accelerate()
      Car1.accelerate()
      let Car2 = new GasCar('Team B', 10);
      Car2.accelerate()
      let Car3 = new GasCar('Team C', 10);
      Car3.accelerate()
      Car3.accelerate()
      Car3.accelerate()
      let racers = [Car1, Car2, Car3];

      let result = findAverageSpeed(racers);
      expect(result).toBe(4);
    });
});

describe('findRacersWithEmptyFuel', () => {
  test('should return an array of racers with empty fuel', () => {
    let racers = [
      new GasCar('Team A', 0),
      new GasCar('Team B', 10),
      new GasCar('Team C', 0),
      new GasCar('Team D', 5),
      new GasCar('Team E', 0),
      new SolarCar("Team F")
    ];
    let expected = [
      new GasCar('Team A', 0),
      new GasCar('Team C', 0),
      new GasCar('Team E', 0)
    ];
    expect(findRacersWithEmptyFuel(racers)).toEqual(expected);
  });

  test(`an array of GasCar where some have no fuel`, () => {
    let gasCar1 = new GasCar("Dolphin", 0);
    let gasCar2 = new GasCar("Barracuda", 100);
    let gasCar3 = new GasCar("Toyota", 12);
    let gasCar4 = new GasCar("Honda", 0);
    let gasCarArray = [gasCar1, gasCar2, gasCar3, gasCar4];
    expect(findRacersWithEmptyFuel(gasCarArray)).toEqual([gasCar1, gasCar4]);
  });
});


describe('getFasterRacer', () => {
  test('should return the faster racer', () => {
    let racerA = new SolarCar("Team 1");
    racerA.accelerate()
    racerA.accelerate()
    racerA.accelerate()
    racerA.accelerate()
    racerA.accelerate()
    let racerB = new SolarCar("Team 2");
    racerB.accelerate()
    racerB.accelerate()
    racerB.accelerate()
    expect(getFasterRacer(racerA, racerB)).toBe(racerA);
  });

  test('should return the faster racer', () => {
    let racerA = new GasCar('Team A', 10);
    racerA.accelerate()
    racerA.accelerate()
    racerA.accelerate()

    let racerB = new SolarCar('Team B');
    racerB.accelerate()
    racerB.accelerate()
    racerB.accelerate()
    racerB.accelerate()
    racerB.accelerate()
    racerB.accelerate()
    racerB.accelerate()
    racerB.accelerate()
    expect(getFasterRacer(racerA, racerB)).toBe(racerB);
  });

  test('should return null if the racers have the same speed', () => {
    let racerA =  new GasCar ('Team A', 5);
    racerA.accelerate()
    let racerB = new GasCar ('Team B', 5);
    racerB.accelerate()
    expect(getFasterRacer(racerA, racerB)).toBe(null);
  });

  test('should return the faster racer (different mix of GasCar and SolarCar)', () => {
    let racerA = new SolarCar('Team A');
    let racerB = new GasCar('Team B', 10);
    racerB.accelerate()
    expect(getFasterRacer(racerA, racerB)).toBe(racerB);
  });
});