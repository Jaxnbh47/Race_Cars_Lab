import {Racer, getFasterRacer, findAverageSpeed, findRacersWithEmptyFuel,} from "../interfaces/IRacer";
import { GasCar } from "../interfaces/GasCar";
import { SolarCar } from "../interfaces/Solarcars";

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
    const racers: Racer[] = [
      new GasCar('Car 1', 50),
      new GasCar('Car 2', 60),
      new GasCar('Car 3', 70), //speed is always equal to 0
    ];
    expect(racers).toBe(60);
  });
  }); //fix this.test
  

describe("findRacersWithEmptyFuel", () => {
  test("returns array of GasCars with empty fuel", () => {
    let Car1 = new GasCar("Team 1", 0);
    let Car2 = new GasCar("Team 2", 10);
    let Car3 = new GasCar("Team 3", 0);
    let racers = [Car1, Car2, Car3];
    let result = findRacersWithEmptyFuel(racers);
    expect(result).toEqual([Car1, Car3]);
  });

  test("returns array of all GasCars when all have empty fuel", () => {
    let Car1 = new GasCar("Team 1", 0);
    let Car2 = new GasCar("Team 2", 0);
    let Car3 = new GasCar("Team 3", 0);
    let racers = [Car1, Car2, Car3];
    let result = findRacersWithEmptyFuel(racers);
    expect(result).toEqual([Car1, Car2, Car3]);
  });

  test("returns empty array when no GasCars have empty fuel", () => {
    let gasCar1 = new GasCar("Team 1", 10);
    let gasCar2 = new GasCar("Team 2", 10);
    let gasCar3 = new GasCar("Team 3", 10);
    let racers = [gasCar1, gasCar2, gasCar3];
    let result = findRacersWithEmptyFuel(racers);
    expect(result).toEqual([]);
  });

  test("returns empty array when only SolarCars are in the array", () => {
    let Car1 = new SolarCar("Team 1", 0);
    let Car2 = new SolarCar("Team 2", 0);
    let Car3 = new SolarCar("Team 3", 0);
    let racers = [Car1, Car2, Car3];
    let result = findRacersWithEmptyFuel(racers);
    expect(result).toEqual([]);
  });

  test("mixed array only returns empty GasCars", () => {
    let Car1 = new GasCar("Team Jack", 0);
    let Car2 = new SolarCar("Team Jay", 0);
    let Car3 = new GasCar("Team Jackson", 10);
    let Car4 = new SolarCar("Team Harris", 0);
    let Car5 = new GasCar("Team Elite", 0);
    let racers = [Car1, Car2, Car3, Car4, Car5];
    let result = findRacersWithEmptyFuel(racers);
    expect(result).toEqual([Car1, Car5])
  });
});