import { testframework } from "./testframework.js";
// Array.prototype.reduce = function() {
//     return 0;
// }
// delete Array.prototype.reduce
Array.prototype.sum = function() {
    const res = this.reduce((acc,cur) => acc + cur);
    return res;
}
testframework("Tesing new method for all arrays",
    'const ar1 = [1, 2, 3]; const ar2 = [3, 4, "a"]',
    ['ar1.sum();', 'ar2.sum();'],
    [6, "7a"]
)


