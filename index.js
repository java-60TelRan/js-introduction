import { testframework } from "./testframework.js";
testframework("myReduce and minMax Tests","const numbers=[1,2,3]; const strings=['a','b','c']",["minMax(numbers)", "minMax(strings)",
 " myReduce(numbers, (acc,cur)=>acc + cur)", "myReduce(numbers, (acc, cur)=>acc * cur, 1)",
 "myReduce(numbers, (acc, cur)=>acc * cur, 0)"
],
  [[1,3], ['a', 'c'], 6, 6, 0]
)
