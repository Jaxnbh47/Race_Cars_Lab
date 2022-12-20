import { Racer } from "./IRacer";

class GasCar implements Racer {
  team: string;
  speed: number;
  fuel: number = 10;

  constructor(team: string, fuel?: number) {
    this.team = team;
    this.speed = 0;

    if (fuel !== undefined) {
      this.fuel;
    }
  }
  accelerate(): void {
    this.speed += 2;
    this.fuel -= 1;
  }

  isFuelEmpty(): boolean {
    return this.fuel <= 0;
  }
}
export { GasCar };
