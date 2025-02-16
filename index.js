
function some(array, fun) {
    //returns true if at least one element of the array mathes condition of fun
    let index = 0;
   while(index < array.length && !fun(array[index], index) ) {
    index++;
   }
   return index < array.length;
}


function every(array, fun) {
    //returns true if all elements of the array match condition of fun
    let index = 0;
   while(index < array.length && fun(array[index], index) ) {
    index++;
   }
   return index == array.length;
}

function elmGreaterIndex(elem, index) {
    return elem > index
}
function elmLessIndex(elem, index) {
    return elem < index
}
function evenNumber(num) {
    return num % 2 == 0;
}
function oddNumber(num) {
    return num % 2 != 0;
}
function negativeNumber(num) {
    return num < 0;
}
function positiveNumber(num) {
    return num >0 ;
}
//test logs
const arOnlyEven = [2, 4, 6, -8];
const arOnlyOdd = [1, 3, 7, 5];
const arOnlyNegativeValues = [-1, -2, -3];
const arOnlyPositiveNumbers= [1 ,2, 3, 4];
console.log(`using "every" , function for numbers greater than the index values, array: ${arOnlyPositiveNumbers}, function ${elmGreaterIndex}, result: ${every(arOnlyPositiveNumbers, elmGreaterIndex)} == true`);
console.log(`using "some" function for even numbers array: ${arOnlyOdd}, function ${evenNumber}, result: ${some(arOnlyOdd, evenNumber)} == false`);
console.log(`using "every" , function for numbers greater than the index values, array: ${arOnlyEven}, function ${elmGreaterIndex}, result: ${every(arOnlyEven, elmGreaterIndex)} == false`);
console.log(`using "some" function for positive numbers array: ${arOnlyNegativeValues}, function ${positiveNumber}, result: ${some(arOnlyNegativeValues, positiveNumber)} == false`);
console.log(`using "every" , function for numbers less than the index values, array: ${arOnlyNegativeValues}, function ${elmLessIndex}, result: ${every(arOnlyNegativeValues, elmLessIndex)} == true`);
console.log(`using "some" function for numbers less than the index values, array: ${arOnlyEven}, function ${elmLessIndex}, result: ${some(arOnlyEven, elmLessIndex)} == true`);
console.log(`using "every" , function for negative numbers, array: ${arOnlyNegativeValues}, function ${negativeNumber}, result: ${every(arOnlyNegativeValues, negativeNumber)} == true`);
console.log(`using "some" function for positive numbers, array: ${arOnlyNegativeValues}, function ${positiveNumber}, result: ${some(arOnlyNegativeValues, positiveNumber)} == false`);