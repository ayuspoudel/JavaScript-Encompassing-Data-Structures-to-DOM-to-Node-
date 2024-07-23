{
    function Animal(name){
        this.name = name;
    }
    Animal.prototype.speak = function(){
        console.log("Hello");
    }

    const dog = new Animal("dog");
    dog.speak();
}