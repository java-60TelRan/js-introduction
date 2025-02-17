function minMax(...values) {
    //see README
    const res = getInitialRes(values[0]); //getting array with first element as min value and second as max
    for (let i = 0; i < values.length; i++) {
            if(Array.isArray(values[i])) {
                 minMaxArray(values[i], res);
                
            } else {
                minMaxElement(values[i], res);
            }
    }
    return res;
}
function getInitialRes(value){
  return Array.isArray(value) ? [value[0], value[0]] : [value, value];
}
function minMaxArray(array,minMaxCur) {
   
    for(let i = 0; i < array.length; i++){
        minMaxElement(array[i], minMaxCur)
    }
  
}

function minMaxElement(Element, minMaxCur) {
    if (Element < minMaxCur[0]) {
        minMaxCur[0] = Element;
    } else if (Element > minMaxCur[1]){
        minMaxCur[1] = Element;
    }
}
console.log(`minMax(1, 2, 3)=${minMax(1, 2, 3)}`);
console.log(`minMax(1, 2, 3, [100, 50] )=${minMax(1, 2, 3, [100, 50] )}`);
console.log(`minMax(1, 2, 3, [100, 50], [-2, 40, 200])= ${minMax(1, 2, 3, [100, 50], [-2, 40, 200])}`);
console.log(`minMax([-2, 40, 200], 1, 2, 3, [100, 50], -100, 300)=${minMax([-2, 40, 200], 1, 2, 3, [100, 50], -100, 300)}`)
console.log(`minMax("abc", "12", "hello", ["-10", "kuku"], "kukureku")=${minMax("abc", "12", "hello", ["-10", "kuku"], "kukureku")}`)
