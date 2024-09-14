// function largestValues(arr){
//   const result = []
//   for(let i = 0; i < arr.length; i++) {
//     let max = arr[i][0]
//     for(let j = 1; j < arr[i].length; j++) {
//       if(arr[i][j] > max) {
//         max = arr[i][j]
//       }
//     }
//     result.push(max)
//   }
//   return result;
// }

const largestValues = arr => arr.map(value => value.reduce((acc, curr) => curr > acc ? curr : acc));

/* ÉNONCÉ 📚 */


/* 
Créez un Algorithme qui prend un tableau composé de plusieurs tableaux en argument et qui retourne un seul tableau qui contient la valeur maximale de chaque sous-tableau. 
*/


/* Test à passer 🧪 */

console.log(
  largestValues([
    [-1, -5, -8, 0],
    [15, 47, 88, 26],
    [32, 35, 37, 39],
    [3000, 1001, 857, 1],
  ])
); // [ 0, 88, 39, 3000 ]
