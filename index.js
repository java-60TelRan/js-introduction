function fun1() {
  var a = 40;
 if (a == 40) {
    var a = 10;
    setTimeout(() => console.log('a', a), 0, a)

 }
 a = 30;

}
fun1()