import { SolarCar } from "../src/SolarCar";

describe('SolarCar', () => {
    test('Team name test', () => {
      const Car = new SolarCar('Team Jackson', 0);
      expect(Car.team).toBe('Team Jackson');
    });
    
    test('speed starts at 0 test', () => {
      let Car = new SolarCar('Team Jackson', 0);
      expect(Car.speed).toBe(0);
    });
    
    test('accelerate functions adds 1 to speed', () => {
      let Car = new SolarCar('Team Jackson', 0);
      Car.accelerate();
      expect(Car.speed).toBe(1);
    });

    test('calling accelerate 2 times, speed = 2', () => {
        let Car = new SolarCar('Team Jackson', 0);
        Car.accelerate();
        Car.accelerate();
        expect(Car.speed).toBe(2);
      });

      test('solar cars do not use fuel', () => {
        const solarCar = new SolarCar('Team Jackson', 0);
        expect(solarCar.isFuelEmpty()).toBe(false);
      });

  });