
{
    try{
        ayush.log("This is not a function");
    }
    catch(error){
        console.log(error.name);
    }
}

{
    try{
        let a = 100;
        console.log(100/0);
    }
    catch(error){
        console.log(error.name);
    }
    finally{
        console.log("Error happened");
    }
    console.log("...")

}

{
    try{
        let a;
        a();
    }
    catch(error){
        console.log(error.name);
    }
}