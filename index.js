const arr = [1, 2, 3];
// const arr1 = arr;
// console.log('before updating arr',`arr1[0]=${arr1[0]}; arr[0] = ${arr[0]}`)
// arr[0] = 100
// console.log('after setting 100 in arr[0]',`arr1[0]=${arr1[0]}; arr[0] = ${arr[0]}`)
// const arr1 = [...arr];
// console.log('before updating arr',`arr1[0]=${arr1[0]}; arr[0] = ${arr[0]}`)
// arr[0] = 100
// console.log('after setting 100 in arr[0]',`arr1[0]=${arr1[0]}; arr[0] = ${arr[0]}`)
let first = 1;
let second = 2;

// TODO write one code line (insead of three specified below) after which variable 'first" will contain 2 and second will contain 1
[first, second] = [second, first]
console.log(`second = ${second}`) //should be printed out 1
console.log(`first = ${first}`) //should be printed out 2

