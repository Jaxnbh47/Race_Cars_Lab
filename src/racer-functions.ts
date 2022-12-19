interface Racer {
  team: string;
  speed: number;
  accelerate(): void;
  isFuelEmpty(): boolean;
}
  function findAverageSpeed(racers: Racer[]){
    let totalSpeed = 0;
    for (const racer of racers) {
      totalSpeed += racer.speed;
          const averageSpeed = totalSpeed / racers.length;
    return averageSpeed;
    }
    const averageSpeed = totalSpeed / racers.length;
    return averageSpeed;
  }


function findRacersWithEmptyFuel(racers: Racer[]){
  return racers.filter((racer) => racer.isFuelEmpty());
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
export { Racer, getFasterRacer, findAverageSpeed, findRacersWithEmptyFuel };
