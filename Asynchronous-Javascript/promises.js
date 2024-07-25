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
    };
    let shop_is_open = false;
    let order = (time, work) =>{
        return new Promise((resolve, reject) =>{
            if(shop_is_open){
                setTimeout(()=>{
                    resolve(work());
                }, time);
            } else{
                reject(console.log("The shop is closed."));
            }
        });
    }

    order(2000, ()=>console.log(`${stocks.fruits[0]} has been selected.`))
    .then(()=>{
        return order(2000, ()=>console.log(`production has started`))
    })
    .then(()=>{
        return order(3000, ()=>console.log(`Fruit has been diced`))
    })
    .then(()=>{
        return order(2000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been selected.`))
    })
    .then(()=>{
        return order(1000, ()=>console.log(`Ice Cream placed on holder ${stocks.holder[1]}.`))
    })
    .then(()=>{
        return order(1000, ()=>console.log(`${stocks.toppings[1]} has been selected for toppings`))
    })
    .then(()=>{
        return order(2000, ()=>console.log(`Ice cream has been served`))
    })

    .catch(()=>{
        return console.log(`Customer left`);
    })

    .finally(()=>{
        return console.log(`Day ended, and the shop is closed`);
    })
}
