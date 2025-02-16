function sum (...operands) {
    let sum = 0;
    for(let i = 0; i < operands.length; i++) {
        sum = sum + operands[i];
    }
    return sum;
}
//examples of function sum
console.log(`sum(1,2, "Hello")=${sum(1,2, "Hello")}`);
//console.log(`sum([1, 2, 3])=${sum([1, 2, 3, 4])}`);