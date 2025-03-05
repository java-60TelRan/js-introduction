const person1 = {name: "Vasya", age: 25};
//person2 is same as person1
// const person2 = person1;
// console.log("before setting age to 30", `person1.age = ${person1.age}; person2.age = ${person2.age}`);
// person1.age = 30;
// console.log("after setting age to 30", `person1.age = ${person1.age}; person2.age = ${person2.age}`);
//person2 is same as person1
// const person2 = {...person1};
// console.log("before setting age to 30", `person1.age = ${person1.age}; person2.age = ${person2.age}`);
// person1.age = 30;
// console.log("after setting age to 30", `person1.age = ${person1.age}; person2.age = ${person2.age}`);
// const {name, age} = person1;
// console.log(`age=${age}`)
// function minMax(arr) {
//   return arr.reduce((acc, cur)=>({min:acc.min > cur ? cur:acc.min,
//      max:acc.max < cur ? cur : acc.max }),{min:arr[0], max:arr[0]})
// }
// const array = [1000, -1, 20, -10];
// const {min, max} = minMax(array);
// console.log(`min=${min}`)
// console.log(`max=${max}`)