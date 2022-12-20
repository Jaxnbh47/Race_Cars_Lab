import { Racer, } from "../interfaces/IRacer"
 
// function findRacersWithEmptyFuel(racers: Racer[]){
//   return racers.filter((racer) => racer.isFuelEmpty());
// };

function findRacersWithEmptyFuel(racers : Racer[]){
let newarray = [];
for(let i = 0; i<racers.length; i++){
 if (racers[i].isFuelEmpty()){
  newarray.push(racers[i])
}
return newarray
}
}

function findAverageSpeed(racers: Racer[]){
    let totalSpeed = 0;
    for (const racer of racers) {
      totalSpeed += racer.speed;
          const averageSpeed = totalSpeed / racers.length;
    return averageSpeed;
    };
    const averageSpeed = totalSpeed / racers.length;
    return averageSpeed;
  };

function getFasterRacer(racerA: Racer, racerB: Racer): Racer | null {
  if (racerA.speed > racerB.speed) {
    return racerA;
  } else if (racerB.speed > racerA.speed) {
    return racerB;
  } else {
    return null;
  }
}

export { getFasterRacer, findAverageSpeed, findRacersWithEmptyFuel };