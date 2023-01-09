import { SolarCar } from "../interfaces/Solarcars";

describe('SolarCar', () => {
    test('Team name test', () => {
      const Car = new SolarCar('Team Jackson');
      expect(Car.team).toBe('Team Jackson');
    });
    
    test('speed starts at 0 test', () => {
      let Car = new SolarCar('Team Jackson');
      expect(Car.speed).toBe(0);
    });
    
    test('accelerate functions adds 1 to speed', () => {
      let Car = new SolarCar('Team Jackson');
      Car.accelerate();
      expect(Car.speed).toBe(1);
    });

    test('calling accelerate 2 times, speed = 2', () => {
        let Car = new SolarCar('Team Jackson');
        Car.accelerate();
        Car.accelerate();
        expect(Car.speed).toBe(2);
      });

      test('solar cars do not use fuel', () => {
        const solarCar = new SolarCar('Team Jackson');
        expect(solarCar.isFuelEmpty()).toBe(false);
      });
  });