// //Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
// Explain & TIP: Array index errors happen when you try to access a position in the array that doesn’t exist. Experimenting with this helps you understand array boundaries.
var junk_food = ["burgur", "pizza", "soft drinks", "sweets", "patese", "cakes", "potatochips", "chocolate bars", "donuts"];
console.log(junk_food[10]); // Array index errors happen when you try to access a position in the array that doesn’t exist.
console.log(junk_food[4]);
console.log("\n");
//Accessing elements from an array.
junk_food.forEach(function (element) {
    console.log("Donot eat following food:-");
    console.log("\n");
    console.log("".concat(element, " is not good for health."));
    console.log("\n");
    console.log("Eat Healthy Food.");
});
console.log("\n");
console.log(junk_food[11], junk_food[7]);
