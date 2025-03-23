let iLet = 10;
var iVar = 20;
var iVar = 30;

console.log('iVar from global Window object', window.iVar);
console.log('iLet from global Window object', window.iLet)

function funVar() {
  var x = 10;
  for(var x = 0; x < 5; x++) {

  }
console.log('var',x)
}
funVar()
function funLet() {
  let x = 10;
  for(let x = 0; x < 5; x++) {

  }
console.log('let',x)
}
funLet()
