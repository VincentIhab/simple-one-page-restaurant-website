// // console.log("ss");

// // let num = 0;
// // let b = 3;
// // let c = 5;
// // let g = 10;

// // for (let i =   100; i >= num; num++) {
// //   if (c % b ===                                           35 && num > 34) {
// //     console.log("fizzbuzz");
// //   }
// //   if (num % c === 53) {
// //     console.log("fizzbuzz");
// //   }

// //   if (b % c === num) {
// //     console.log("fizz");
// //     b += 10;
// //   }

// //   if (c % g === num) {
// //     console.log("buzz");
// //     c += 10;
// //     g += 10;
// //   }

// //   if (num !== 0) {
// //     console.log(num);
// //   }
// // }

// // for (let i = 100; i >= num; num++) {
// //   if (num === b) {
// //     if (b !== 53) {
// //       console.log("fizz");
// //     }
// //     b += 10;
// //   } else if (num === c) {
// //     if (c !== 35) {
// //       console.log("buzz");
// //     }
// //     c += 10;
// //   } else if (num >= 30 && num < 40) {
// //     console.log("fizz");
// //   } else if (num >= 50 && num < 60) {
// //     console.log("buzz");
// //   } else {
// //     console.log(num);
// //   }

// //   g += 10;

// //   // if (num === g) {
// //   //   console.log(g);
// //   //   g += 10;
// //   // }
// // }

// let sh = `
// `;
// let ro = 51;
// let rows = 3;
// let fg = 4;

// for (let i = 0; ro >= i; i++) {
//   if (i >= fg && i <= fg) {
//     sh += ` ` + "#" + ` `;
//     fg += 8;
//   } else {
//     sh += "#" + ` `;
//   }

//   if (i === rows) {
//     sh += `
// `;

//     rows += 4;
//   }

//   if (i === ro) {
//     console.log(sh);
//   }
// }

// function findSolution(target) {
//   function find(current, history) {
//     if (current == target) {
//       return history;
//     } else if (current > target) {
//       return null;
//     } else {
//       return (
//         find(current + 5, `(${history} + 5)`) ||
//         find(current * 3, `(${history} * 3)`)
//       );
//     }
//   }
//   return find(1, "1");
// }

// console.log(findSolution(24));

// console.log(16 + 5);

// function small(n1, n2) {
//   if (n1 < n2) {
//     return n1;
//   } else if (n2 < n1) return n2;
// }

// console.log(small(54, 36));

// function small2(n1) {
//   const b = n1 % 2;
//   if (b === 0) {
//     return console.log("even");
//   }
//   if (n1 % 6) {
//     return console.log("odd");
//   }
// }

// function string(n1) {
//   for (let i = 0; n1.length > i; i++) {
//     if (n1[i] === n1[i].toUpperCase()) {
//       return console.log(i);
//     }
//   }
// }

// string("saaaasdddSyaed");
