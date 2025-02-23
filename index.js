const array = ['HELLO', 122, -10, 'Java', 'JavaScript', 500, 'Nodejs'];
function isNumber(element) {
  return typeof element == "number";
}
function compNumStr(e1, e2) {
    //compares e1 and e2 based on:
   //returns negative, positive or 0 so that
    //sorting was as follows
    //first numbers sorted by descending order
    //after numbers strings sorted by ascending order
    //example: array.sort(compNumStr);
    //array will be  [500, 122, -10, 'HELLO', 'Java', 'JavaScript','Nodejs']
    let res = 1;
    if(isNumber(e1) && isNumber(e2)) {
      res = e2 - e1;
    } else if (!isNumber(e1) && !isNumber(e2)) {
      res = e1 > e2 ? 1 : -1
    } else if (isNumber(e1) && !isNumber(e2)) {
      res = -1;
    }
    return res;
}
array.sort(compNumStr);
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
const bodyElement = document.querySelector('body');
bodyElement.innerHTML = orderedList(array);