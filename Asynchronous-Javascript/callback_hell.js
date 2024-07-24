/*Steps to make Icecream:
    1. Place Order
    2. Cut fruits
    3. Add water and ice
    4. Start the machine
    5. Select Container
    6. Select toppings
    7. Serve ice cream
     */
{
    let stocks = {
        fruits: ["strawberry", "grapes", "banana", "apple"],
        liquid: ["water, ice"],
        holder: ["cone", "cup", "stick"],
        toppings: ["chocolate", "peanuts"]
    }

    let order = (fruitname, call_production) => {
        setTimeout(() => { console.log(`${stocks.fruits[fruitname]} was selected.`);
        call_production();
        }, 2000);
    };

    let production = () => {
        setTimeout( () => {
            console.log("production has started");
            setTimeout( () => {
                console.log("Fruit has been diced");
                setTimeout( () => {
                    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been selected.`);
                    setTimeout( () => {
                        console.log(`The machine has been started.`);
                        setTimeout( () => {
                            console.log(`Ice Cream placed on holder ${stocks.holder[1]}.`);
                            setTimeout( ()=> {
                                console.log(`${stocks.toppings[1]} has been selected for toppings`);
                                setTimeout( ()=>{
                                    console.log(`Ice cream has been served`);
                                }, 2000) 
                            },3000)
                        }, 2000)
                    },1000)
                }, 1000)
            }, 2000)
        }, 0)
    };

    order(0, production);
}