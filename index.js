let array = ['HELLO', 122, -10, 'Java', 'JavaScript', 500, 'Nodejs'];
let array1 = array.slice() //arra1 contains copy of array
function isNumber(element) {
  return typeof element == "number";
}

function orderedList(array) {
    //array is any array containing both numbewrs and strings
    //returns HTML text for ordered list
    //string will have default color
    //number will have red color
    //<ol><li>....</li>...<li>....</li></ol>
    //example (only ewxample)
    const items = getItems(array).join(" ");
    return `<ol>
       ${items}
    </ol>`
}
function getItems(array) {
  const res = array.map(getItem);
  return res
}
function getItem(element) {
  const res =  `<li class="item ${isNumber(element) ? "item_number" : ""}">${element}</li>`
  return res;
}
 array = array.filter(e => isNumber(e))
console.log('array.some(a => a < 0) =>',array.some(a => a < 0))
console.log('array.every(a => a < 0) =>',array.every(a => a < 0))
console.log(`sum of array [${array}] => `, array.reduce((acc, cur) => acc + cur, 0))
console.log(`minimal value of array [${array}] =>`, array.reduce((acc,cur) => acc < cur ? acc : cur))
array = array1.slice(1,3); //array containing two elements 122, -10 - result see on the browser

const bodyElement = document.querySelector('body');
bodyElement.innerHTML = orderedList(array);
//resume of the methods based on array processing with callback function
//forEach - callback function doesn't return anything but performs some action with each element of array
//map - callback function returns converted one element. Returns new array with converted elements by callback function
//filter - callback is a predicate function. Returns new array with the elements matching callback function
//some - callback is a predicate function. Returns true if at least one element matches callback function
//every - callback is a predicate function. Returns true if all elements match callback function
//reduce - callback is a function returning some accumulatoring value