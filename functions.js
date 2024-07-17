
let square = function(x){
    return x*x;
}
var makenoise = function(){
    console.log("Pling!")
}
var power = function(base, exponent){
    var result = 1;
    while(exponent>0){
        result *= base;
        exponent--;
    }
    return result;
}

console.log(square(12));
console.log(power(2,4));
makenoise();