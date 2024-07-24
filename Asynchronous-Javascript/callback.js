// {
//     function one(){
//         console.log("step 2");
//     }
//     function two(){
//         console.log("step 2");
//     }
//     two();
//     one();
// }

// {
//     function one(call_two){
//         console.log("step 2");
//         call_two();
//     }
//     function two(){
//         console.log("Step 2");
//     }
//     one(two);

// }

{
    function one(callback){
        console.log("Step 1");
        callback();
    }
    function two(callback){
        console.log("Step 2");
        callback();
    }
    function three(callback){
        console.log("Step 3");
        callback();
    }
    function four(callback){
        console.log("Step 4");
        callback();
    }
    function five(){
        console.log("Step 5");
    }
    one(()=>{
        two(()=>{
            three(()=>{
                four(()=>{
                    five(()=>{})
                })
            })
        })
    })
}
