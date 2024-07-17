function printFarmInventory(cows, chickens){
    var cownum = String(cows);
    var chickennum = String(chickens);
    while(cownum.length<3){
        cownum = "0" + cownum;
    }
    console.log(cownum + " Cows");
    while(chickennum.length<3){
        chickennum = "0"+chickennum;
    }
    console.log(chickennum + " Chickens");
}

printFarmInventory(3, 17);