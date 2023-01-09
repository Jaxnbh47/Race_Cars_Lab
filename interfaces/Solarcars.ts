import { Racer } from "./IRacer";

class SolarCar implements Racer {
  team: string;
  speed: number = 0;

  constructor(team: string) {
    this.team = team;
    this.speed;
  };

  accelerate(): void {
    this.speed += 1;
  };

  isFuelEmpty(): boolean {
    return false;
  };
};

export { SolarCar };