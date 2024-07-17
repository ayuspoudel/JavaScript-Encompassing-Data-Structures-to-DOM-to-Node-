
var x = "X Global Variable"
var f1 = function(){
    var x = " X Local Variable";
}
f1();
console.log(x);

var y = " Y Global Variable"
var f2 = function(){
    y = "Y Local Variable"
}
f2();
console.log(y);