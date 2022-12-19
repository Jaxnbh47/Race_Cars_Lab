import { Racer } from "../src/racer-functions";
class SolarCar implements Racer {
  team: string;
  speed: number = 0;//might be why speed is always equal to 0

  constructor(team: string, speed: number) {
    this.team = team;
    this.speed = speed;
  }

  accelerate(): void {
    this.speed += 1;
  }

  isFuelEmpty(): boolean {
    return false;
  }
}

export { SolarCar };
