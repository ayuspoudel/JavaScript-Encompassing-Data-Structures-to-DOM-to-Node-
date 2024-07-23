{
    function User(name, interests, food){
        this.name = name;
        this.interests = interests;
        this.food = food;
    }
    
    let ayush = new User("Ayush", ["Watching Movies", "Beer", "Playing Guitar"], "Meat Sauce Pasta");
    console.log(ayush);
    document.getElementById("ayush-name").innerHTML = ayush.name;
    document.getElementById("ayush-interests").innerHTML = ayush.interests;
    document.getElementById("ayush-food").innerHTML = ayush.food;
}
{
    function User(name, interests, food){
        let person = {
            name: name,
            interests: interests,
            food: food
        }
        return person;
    }
    let rakshya = User("Rakshya", ["Watching Movies", "Wine", "Singing"], "Spaghetti Bolougnese");
    console.log(rakshya);
}