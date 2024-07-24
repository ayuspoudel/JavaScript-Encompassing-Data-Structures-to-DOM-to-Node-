{
    class Animal{
        constructor(name){
            this.name = name;
        }
        speak(){
            console.log("Hello");
        }
    }

    class dog extends Animal{
        speak(){
            console.log("Bark")
        }
    }

    const July = new dog("Julie");
    July.speak();
}