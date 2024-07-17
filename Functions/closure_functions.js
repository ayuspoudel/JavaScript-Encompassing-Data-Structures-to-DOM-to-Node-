function wrapvalue(n){
    var localVariable = n;
    return function(){
        return localVariable;
    }
}
var wrap1 = wrapvalue(1);
var wrap2 = wrapvalue(2);
console.log(wrap1());