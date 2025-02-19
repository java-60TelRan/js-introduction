const array = ['HELLO', 122, -10, 'Java', 'JavaScript', 500, 'Nodejs'];
function compNumStr(e1, e2) {
    //TODO
    //compares e1 and e2 based on:
   //returns negative, positive or 0 so that
    //sorting was as follows
    //first numbers sorted by descending order
    //after numbers strings sorted by ascending order
    //example: array.sort(compNumStr);
    //array will be  [500, 122, -10, 'HELLO', 'Java', 'JavaScript','Nodejs']
}
function orderedList(array) {
    //TODO
    //array is any array containing both numbewrs and strings
    //returns HTML text for ordered list
    //string will have default color
    //number will have red color
    //<ol><li>....</li>...<li>....</li></ol>
    //example (only ewxample)
    return `<ol>
        <li class="item">Hello</li>
        <li class="item item_number">300</li>
        <li class="item">Java</li>
        <li class="item">Nodejs</li>
        <li class="item item_number">100</li>
    </ol>`
}
const bodyElement = document.querySelector('body');
bodyElement.innerHTML = orderedList(["Hello", 300, "Java", "Nodejs", 100]);