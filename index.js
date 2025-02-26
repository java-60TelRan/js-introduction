function myReduce(array, callback, initialValue) {
  //first parameter is an array for reducing
  //returns one value after reducing
  //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  let acc = initialValue == undefined ? array[0] : initialValue;
  const index = initialValue == undefined  ? 1 : 0;
  for (let i = index; i < array.length; i++) {
    acc = callback(acc, array[i], i, array);
  }
  return acc;
}
function minMax(arr){
  //arr is an array containing either strings or numbers
  // returns array with two elemnts: first is min value, second is max value
  //requirement: to use myReduce method described above (only one call)
  const res = myReduce(arr, (acc, curr) => [acc[0] > curr ? curr : acc[0] , acc[1] < curr ? curr : acc[1]],
   [arr[0], arr[0]]);
  return res;
}
const arr1 = ["hello", "kuku", "abc"];
const arr2 = ["abc", "hello", "kuku"];
const arr3 = [1, 2, 3];
const arr4 = [3, 2, 1];
console.log(`[min, max] result for [${arr1}] is [${minMax(arr1)}], expected [abc, kuku]`);
console.log(`[min, max] result for [${arr2}] is [${minMax(arr2)}], expected [abc, kuku]`);
console.log(`[min, max] result for [${arr3}] is [${minMax(arr3)}], expected [1, 3]`);
console.log(`[min, max] result for [${arr4}] is [${minMax(arr4)}], expected [1, 3]`);
console.log(`sum by using myReduce of [${arr3}] is ${myReduce(arr3, (acc, curr) => acc + curr)}, expected 6`);
console.log(`multiplicity by using myReduce of [${arr4}] is ${myReduce(arr4, (acc, curr) => acc * curr)}, expected 6`);
console.log(`multiplicity with initial value 0 by using myReduce of [${arr3}] is ${myReduce(arr3, (acc, curr) => acc * curr, 0)}, expected 0`);
