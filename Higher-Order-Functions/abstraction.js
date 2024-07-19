// var array = [1,2,3,4,5];

// for(let i = 0; i<array.length; i++){
//     console.log(array[i] + " ");
// }

var array = [1,2,3,4,5];
var traversal = function(array){
    for(let i = 0; i<array.length; i++){
        console.log(array[i]);
    }
};

traversal(array);



/*But what if we do something else instead of logging the value into the console
Since, functions are values, we can create an action funciton, and 
pass it as a parameter*/
var array = [1,2,3,4,5];

var increment = function(arr, index){
    arr[index]++;
};

var traversal = function(array, action){
    for(let i = 0; i < array.length; i++){
        action(array, i);
    }
}

traversal(array, increment);
traversal(array, console.log); // This will print the incremented array




