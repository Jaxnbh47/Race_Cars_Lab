import { Racer } from "../interfaces/IRacer";

class SolarCar implements Racer {
  team: string;
  speed: number;

  constructor(team: string) {
    this.team = team;
    this.speed = 0;
  };
  Push(arg0: Racer): unknown {
        throw new Error("Method not implemented.");
    }


  accelerate(): void {
    this.speed += 1;
  };

  isFuelEmpty(): boolean {
    return false;
  };
};

export { SolarCar };