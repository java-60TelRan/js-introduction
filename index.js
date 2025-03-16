function sleep(timeout) {
  return new Promise(resolve => {
    if(timeout < 0) {
      throw("timeout cannot be negative")
    }
    setTimeout(() => resolve(), timeout)
  })
}
const timeout = -5000;
sleep(timeout).then(() => console.log(`result after ${timeout / 1000} seconds` ))
.catch(e => {console.log(e)}).finally(()=> console.log("printing out in any case"));
console.log("Hello world");