const array = ['HELLO', 122, -10, 'Java', 'JavaScript', 500, 'Nodejs'];
//adding to array
//push adds to end of an source array
//unshiftn adds at beginning of an source array
//splice inserts at middle of array
// array.push(...[1, 2, 3]);
// console.log(array[7])
//console.log([1, 2, 3].push([4, 5, 6]))
 //const array1 = array.concat(3, 4, 5)
// console.log(array1[3])
//concat - method that doesn't update source array. It only returns new array as a result of concatination
// const ar1 = [3,4,5].concat(array);
// console.log(ar1)
// console.log(array.unshift(3, 4, 5))
// console.log(array);
// 
/***************************************************************** */
//removing last element
// console.log(array.pop())
// console.log(array)
//removing first element
// console.log(array.shift());
// console.log(array)
//removing several elements or at middle
// console.log(array.splice(4, 3));
// console.log(array)
console.log(array.splice(3, 1, "Python"))
console.log(array)