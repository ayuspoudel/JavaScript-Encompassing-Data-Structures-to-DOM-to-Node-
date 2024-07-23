{
    function myfirstfunction() {
        console.log("First function");
    }
    function mysecondfunction() {
        console.log("Second Function");
    }

    myfirstfunction();
    mysecondfunction();
}

{
    function mydisplayer(some){
        document.getElementById("demo").innerHTML = some
    }
    let myCalculator = new Function("a", "b", "return a+b;");

    let result = myCalculator(5,5);
    (function(){
        document.getElementById("demo").innerHTML = "Hello";
    })()
}

{
    function mydisplayer(some){
        document.getElementById("demo2").innerHTML = some
    }
    function myCalculator(a, b, myCallback){
        let sum =  a+b;
        myCallback(sum);
    }
    myCalculator(2,20,mydisplayer);
}

{
    let print = new Function("string", "console.log(string)");
    print("Ayush");
}
{
    (function(){
        console.log("This is a self invocating function");
    })();
}

{
    function animal(name){
        this.name = name;
        animal.prototype.speak = function(){
            console.log("I'm a "+this.name);
        }
    }

    const dog = new animal("dog");
    dog.speak();
}

{
    function arrayprint(...a){
        console.log(a);
    }
    arrayprint(1,2,3,4,5,6,"Ayush");
}

 