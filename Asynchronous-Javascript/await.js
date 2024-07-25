{
    let stocks = {
        fruits: ["strawberry", "grapes", "banana", "apple"],
        liquid: ["water, ice"],
        holder: ["cone", "cup", "stick"],
        toppings: ["chocolate", "peanuts"]
    }

    async function order(){
        try{
            await abc();
        }
        catch{
            console.log("The function does not exist");
        }
        finally{
            console.log("The code was executed");
        }
    }
    order();
}