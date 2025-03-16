function sleep(timeout) {
  let running = true;
  const timestamp = new Date().getTime();
  while(running) {
    let current = new Date().getTime();
    if (current - timestamp >= timeout) {
      running = false;
    }
  }
}
sleep(5000);
console.log("Hello world");