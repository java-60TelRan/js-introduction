const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
b.toString = function() {
   return "kuku"
}
a[b] = 123;
a[c] = 456;

console.log(a[b]);
