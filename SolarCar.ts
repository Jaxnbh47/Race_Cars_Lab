import { Racer } from "./racer-functions";
class SolarCar implements Racer {
  team: string;
  speed: number = 0;

  constructor(team: string) {
    this.team = team;
  }

  accelerate(): void {
    this.speed += 1;
  }

  isFuelEmpty(): boolean {
    return false;
  }
}

export { SolarCar };
