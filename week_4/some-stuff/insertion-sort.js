// `Start from the second element, compare it with the previous one.
// Swap them if the latter is larger than the former, otherwise, stop comparing, 
// move to the next element.By doing this repetitively, we always take the first element 
// for the unsorted tail list and insert it to the proper position of sorted head list. `

// const t = [1, 3, 2, 4, 2, 1];

// function splitInHalf(array) {

//   const firstHalf = array.slice(0, Math.floor(array.length / 2));
//   const secondHalf = array.slice(Math.floor(array.length / 2) + 1);
// }

// /* console.log */(splitInHalf(t));

const costs = [[10, 20], [30, 200], [400, 10, 50], [30, 20]];
// const costs =
//   [[515, 563], [451, 713], [537, 709], [343, 819],
//   [855, 779], [457, 60], [650, 359], [631, 42]];

// const costs = [[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]]
let minimumPrice = 0;
for (let index = 0; index < costs.length; index++) {
  let currentMinPrice = Infinity;
  for (let cost = 0; cost < costs[index].length; cost++) {
    const currentVal = costs[index][cost];
    if (currentMinPrice > currentVal) {
      currentMinPrice = currentVal;
    }
  }
  minimumPrice += currentMinPrice;
}
console.log(minimumPrice);