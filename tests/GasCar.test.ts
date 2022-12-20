import { Racer } from "../interface/IRacer";

describe('GasCar', () => {
    test('sets team and fuel properties from constructor parameters', () => {
      const Car = new GasCar('Team Jackson', 20);
      expect(Car.team).toBe('Team Jackson');
      expect(Car.fuel).toBe(20);
    });
    
    test('fuel property defaults to 10 when second constructor parameter is omitted', () => {
      const Car = new GasCar('Team Jackson');
      expect(Car.fuel).toBe(10);
    });
    
    test('speed property starts at 0', () => {
      const Car = new GasCar('Team Jackson');
      expect(Car.speed).toBe(0);
    });
    
    test('accelerate increases speed by 2', () => {
      const Car = new GasCar('Team Jackson');
      Car.accelerate();
      expect(Car.speed).toBe(2);
    });
    
    test('accelerate twice increases speed by 4', () => {
      const Car = new GasCar('Team Jackson');
      Car.accelerate();
      Car.accelerate();
      expect(Car.speed).toBe(4);
    });
    
    test('accelerate once reduces fuel by 1', () => {
      const Car = new GasCar('Team Jackson', 10);
      Car.accelerate();
      expect(Car.fuel).toBe(9);
    });
    
    test('accelerate twice reduces fuel by 2', () => {
      const Car = new GasCar('Team Jackson', 10);
      Car.accelerate();
      Car.accelerate();
      expect(Car.fuel).toBe(8);
    });
    
    test('isFuelEmpty returns true when fuel is 0', () => {
      const Car = new GasCar('Team Jackson', 0);
      expect(Car.isFuelEmpty()).toBe(true);
    });
    
    test('isFuelEmpty returns false when fuel is greater than 0', () => {
      const Car = new GasCar('Team Jackson', 10);
      expect(Car.isFuelEmpty()).toBe(false);
    });
  });