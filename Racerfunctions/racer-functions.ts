import { Racer } from "../interfaces/IRacer";

function findRacersWithEmptyFuel(racers: Racer[]){
  return racers.filter((racer) => racer.isFuelEmpty());
};
//Dry = don repeate yourself

// function findRacersWithEmptyFuel(racers: Racer[]) {
//   let newarray = [];
//   for (let i = 0; i < racers.length; i++) {
//     if (racers[i].isFuelEmpty()) {
//       newarray.push(racers.[i]);
//     }
//   }
//   return newarray;
// }

function findAverageSpeed(racers: Racer[]): number {
  let totalSpeed = 0;
  if (racers.length === 0) {
    return 0;
  } else {
  for (let racer of racers) {
    totalSpeed += racer.speed;
  }
  return totalSpeed / racers.length;
}
}
function getFasterRacer(racerA: Racer, racerB: Racer): Racer | null {
  if (racerA.speed > racerB.speed) {
    return racerA;
  } else if (racerA.speed < racerB.speed) {
    return racerB;
  } else{
    return null;
  }
}

export { getFasterRacer, findAverageSpeed, findRacersWithEmptyFuel };