//arrow functions
const sumFun = function(op1, op2) {
  return op1 + op2;
}
const sumArrowFun = (op1, op2) => op1 + op2;
//statement
// let c, a = 10, b = 3;
// if( a > b) {
//   c = a+ b
// } else {
//   c = a *b;
// }
/***************************** */
//c = a > b ? a + b : a * b;
const printC = function()  {
  let c, a = 10, b = 3;
if( a > b) {
  c = a+ b
} else {
  c = a *b;
}
console.log(c)
}
printC()

const printCarrow = (a, b) => console.log(a > b ? a + b : a * b);
printCarrow(3, 10);
console.log([10, -7, 100, 20].sort((a, b) => a - b))


