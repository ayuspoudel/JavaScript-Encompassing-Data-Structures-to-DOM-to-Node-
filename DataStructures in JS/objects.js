// var day1 = {
//     squirrel: false,
//     events: ["work", "touched tree","pizza", "running", "television"]
// };
// console.log(day1.squirrel);
// console.log(day1.events);
// console.log(day1.wolf);
// day1.wolf = true;
// console.log(day1.wolf);


// var anObject = {left:1, right:2};
// console.log(anObject.left);
// delete anObject.left;
// console.log("left" in anObject);
// console.log("right" in anObject);


// var journal = [
//     {
//         events:["work", "touched tree", "pizza", "running", "television"],
//         squirrel:false
//     },
//     {
//         events: ["work" , "ice cream", "cauliflower", "lasagna", "touched tree", 
//             "brushed teeth"
//         ],
//         squirrel: false
//     },
//     {
//         events: ["work" , "hunt", "feed", "sun", "touched tree", 
//             "go to river"
//         ],
//         wolf: true
//     }
//     /*And so on ...*/
// ]

var jounral = [];

function addEntry(events, didTurnintoaSquirrel){
    jounral.push(
        {
            events:events,
            squirrel:didTurnintoaSquirrel
        }
    )
}
addEntry(["work", "touched tree", "pizza", "running", "television"],false);
console.log(jounral);
