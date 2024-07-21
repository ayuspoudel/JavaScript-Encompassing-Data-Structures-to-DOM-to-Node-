
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

let insertionpoint = (arr, key) =>{
    let start = 0;
    let end = arr.length -1;
    let mid = start + (end-start)/2;
    while(start<=end){
        if(arr[mid] == key){
            return mid;
        }
        else if(arr[mid>key]){
            start = mid +1;
        }
        {
            end =  mid -1;
        }
    }
    return start;
}

let push = (arr, key) =>{
    let pos = insertionpoint(arr, key);
    for(let i = arr.length -1; i>=pos;i--){
        arr[i+1] = arr[i];
    }
    console.log(arr);
}

console.log(search(newArray, 20));
push(newArray, 15);