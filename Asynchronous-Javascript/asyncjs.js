{
    function one(){
        console.log("Step 1");
    }
    function two(){
        console.log("Step 2");
    }

    one();
    two();

}

/*{
    function one(){
        setTimeout(()=>{
            console.log("Step 1");
        }, 2000);
    }
    function two(){
        console.log("Step 2");
    }
    one();
    two();
}*/

/*Using call back ,you have to nest your call back function within settimeout, for it to work*/
/*Promise has to be awaited at all cost */
// {
//     function one(callback){
//         setTimeout(()=>{
//             console.log("Step 1");
//             callback();
//         }, 2000);
        
//     }
//     function two(){
//         console.log(`Step 2`);
//     }

//     one(()=>{two()});
// }

{
    let bool = true;
    let zero = function(){
        console.log("Steps still happening.");
    }
    let one = async function(){
        return new Promise((resolve, reject)=>{
            if(bool){
                setTimeout(()=>resolve(()=>{console.log("Step 1")}), 2000);
            }
            else{
                reject(()=>console.log(`first step failed`));
            }
        })
    }
    function two(){
        try{
            one();
            console.log("Step 2");
        }
        catch{
            console.log("Failed");
        }
    }
    zero();
    

    two();
}