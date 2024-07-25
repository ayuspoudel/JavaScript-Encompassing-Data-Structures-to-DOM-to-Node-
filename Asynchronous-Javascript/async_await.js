{
    let stocks = {
        fruits: ["strawberry", "grapes", "banana", "apple"],
        liquid: ["water, ice"],
        holder: ["cone", "cup", "stick"],
        toppings: ["chocolate", "peanuts"]
    }
    let shop_is_open = true;

    function time(ms){
        return new Promise((resolve, reject)=>{
            if(shop_is_open){
                setTimeout(resolve, ms);
            }
            else{
                reject(console.log("The shop is closed"));
            }
        })
    }

    async function kitchen(){
        try{    
            await time(2000);
            console.log(`${stocks.fruits[0]} was selected.`);
            console.log(`production has started`);
            await time(2000);
            console.log(`Fruit has been diced`);
            await time(2000);
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been selected.`);
            await time(2000);
            console.log(`The machine has been started.`);
            await time(2000);
            console.log(`Ice Cream placed on holder ${stocks.holder[1]}.`);
            await time(2000);
            console.log(`${stocks.toppings[1]} has been selected for toppings`);
            await time(2000);
            console.log(`Ice cream has been served`);
        }
        catch(error){
            console.log(`Customer left`);
        }
        finally{
            console.log(`Day Ended. The shop is closed`)
        }
    }
    kitchen();
}