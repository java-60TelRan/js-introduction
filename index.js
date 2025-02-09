function sumDigits(num) {
    let source = num * 1;
    let res = NaN;
    if(source == num) {
        res = 0;
        if(source < 0) {
            source = -source;
        }
        source = Math.trunc(source);
        while (source > 0) {
            const digit = source % 10;
            res += digit;
            source = Math.trunc(source / 10);

        }
    }
    return res;

}
console.log(`sum of digits in positive integer number, sumDigits(123)=6 ${sumDigits(123)==6}`);
console.log(`sum of digits in negative integer number, sumDigits(-123)=6 ${sumDigits(-123) == 6}`);
console.log(`sum of digits in string containing positive integer number, sumDigits("123")=6 ${sumDigits("123")==6}`);
console.log(`sum of digits in not a number, sumDigits("a123")=NaN => ${sumDigits("a123")}`);
console.log(`sum of digits in not a number, sumDigits("123a")=NaN => ${sumDigits("123a")}`);
console.log(`sum of digits in positive fractional number, sumDigits(123.9999)=6 ${sumDigits(123.999) == 6}`);


function displayAnanas() {
    console.log(`a${("a"-"b")}as`.toLowerCase())
}
displayAnanas();