
let newArray = new Array();
newArray.push(10);
newArray.push(20);
newArray.push(30);
newArray.push(40);
newArray.push(50);
console.log(newArray);

let search = (arr, key) => {
    let count = 0;
    for(value of arr){
        if(key == value){
            return count;
        }
        count++;
    }
    return -1;
}

console.log(search(newArray, 20));