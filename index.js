import { testframework } from "./testframework.js";
testframework("myReduce and minMax Tests","const numbers=[1,2,3]; const strings=['a','b','c']",["minMax(numbers)", "minMax(strings)",
 " myReduce(numbers, (acc,cur)=>acc + cur)", "myReduce(numbers, (acc, cur)=>acc * cur, 1)",
 "myReduce(numbers, (acc, cur)=>acc * cur, 0)"
],
  [[1,3], ['a', 'c'], 6, 6, 0]
)
const array = [];
array[100000] = 10;
array[0]= 3;
array[1]=undefined;

//first variant c-style
// for(let i = 0; i < array.length; i++) {
//   console.log(array[i]);
//  }
//second variant for-of construction
// for(const num of array) {
//   console.log(num);
// }
//third variant for-in
// for(const i in array) {
//   console.log(i, array[i]);
// }

