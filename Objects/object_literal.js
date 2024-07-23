{
    let ayush = {
        firstName:"Ayush",
        lastName:"Poudel"
    }
    console.log(ayush);

}
{
    function Student(name, age, uni){
        this.name = name;
        this.age = age;
        this.university = uni
    }
    let ayush = new Student("Ayush", 21, "USF");
    console.log(ayush);
}

{
    function Animal(name){
        this.name = name;
    }
    // console.log(Animal.prototype)
    Animal.prototype.speak = function(){console.log("Hi!")}
    // console.log(Animal.prototype)
    const dog = new Animal("dog");

}

