{
    
function Animal(name) {
    const obj = {};
    obj.name = name;
 
    obj.sound = function() {
        console.log("Some generic sound");
    };
 
    return obj;
}
 
function Dog(name, breed) {
    const obj = Animal(name);
    obj.breed = breed;
 
    obj.sound = function() {
        console.log("Woof! Woof!");
    };
 
    return obj;
}
 
const myDog = Dog("Buddy", "Labrador");
myDog.sound();  // Outputs: Woof! Woof!
}