interface Racer {
  Push(arg0: Racer): unknown;
  team: string;
  speed: number;
  accelerate(): void;
  isFuelEmpty(): boolean;
}
export { Racer }

// function findRacersWithEmptyFuel(racers: Racer[]){
//   return racers.filter((racer) => racer.isFuelEmpty());
// };

// //function findRacersWithEmptyFuel(racers : Racer[]){
// // let array = [];
// // for(let i = 0; i<array.length; i++){
// //  racers[i].isFuelEmpty()
// // }
// // }

// function findAverageSpeed(racers: Racer[]){
//   let totalSpeed = 0;
//   for (const racer of racers) {
//     totalSpeed += racer.speed;
//         const averageSpeed = totalSpeed / racers.length;
//   return averageSpeed;
//   }
//   const averageSpeed = totalSpeed / racers.length;
//   return averageSpeed;
// };

// function getFasterRacer(racerA: Racer, racerB: Racer): Racer | null {
//   if (racerA.speed > racerB.speed) {
//     return racerA;
//   } else if (racerB.speed > racerA.speed) {
//     return racerB;
//   } else {
//     return null;
//   };
// };
export { Racer };
