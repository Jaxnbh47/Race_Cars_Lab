interface Racer {
  team: string;
  speed: number;
  accelerate(): void;
  isFuelEmpty(): boolean;
}

function getFasterRacer(racerA: Racer, racerB: Racer): Racer | null {
  if (racerA.speed > racerB.speed) {
    return racerA;
  } else if (racerB.speed > racerA.speed) {
    return racerB;
  } else {
    return null;
  }
}

function findAverageSpeed(racers: Racer[]): number {
  if (racers.length === 0) {
    return 0;
  }
  return racers.reduce((total, racer) => total + racer.speed, 0) / racers.length;
}

function findRacersWithEmptyFuel(racers: Racer[]): Racer[] {
  return racers.filter(racer => racer.isFuelEmpty());
}

export { Racer, getFasterRacer, findAverageSpeed, findRacersWithEmptyFuel };
