/*{
    let stocks = {
        fruits: ["strawberry", "grapes", "banana", "apple"],
        liquid: ["water, ice"],
        holder: ["cone", "cup", "stick"],
        toppings: ["chocolate", "peanuts"]
    }
    let shop_is_open = true;
    let toppings_choice = ()=>{
        return new Promise((resolve, reject)=>{
            if(shop_is_open){
            setTimeout(()=>{
                resolve(console.log("Which toppings would you like?"))
            }, 3000)
        }
    })
        
    }
    let kitchen = async function(){
        console.log("A");
        console.log("B");
        console.log("C");
        await toppings_choice();
        console.log("D");
        console.log("E");
    }
    kitchen();
    console.log("Doing Dishes");
    console.log("Cleaning Table");
}*/
{
    let stocks = {
        fruits: ["strawberry", "grapes", "banana", "apple"],
        liquid: ["water, ice"],
        holder: ["cone", "cup", "stick"],
        toppings: ["chocolate", "peanuts"]
    }
    let shop_is_open = false;

    let time = (ms) =>{
        return new Promise((resolve, reject) =>{
            if(shop_is_open){
                setTimeout(()=>{resolve()}, ms);
            }
            else{
                reject(console.log("The customer left"));
            }
        });
    }
    // time(22)
    //     .then(()=>{
    //         console.log("Promise Fullfilled.")
    //     })
    //     .catch(()=>{
    //         console.log("Promise rejected")
    //     })
    //     .finally(()=>{
    //         console.log("Done")
    //     })

    async function handletime(){
        try{
            await time(22);
            console.log("Promise Fullfilled")
        }
        catch(error){
            console.log(`Promise Rejected ${error}`)
        }
        finally{
            console.log("Done")
        }
    }
    handletime();
}