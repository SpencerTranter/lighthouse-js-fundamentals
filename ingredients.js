var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var number = 0;
while(number < ingredients.length){
  console.log(ingredients[number]);
  number++;
}
console.log();
// Write a for loop that prints out the contents of ingredients:
for(var num = 0; num < ingredients.length; num++){
  console.log(ingredients[num]);
}
console.log();
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(var num = ingredients.length -1; num > -1; num--){
  console.log(ingredients[num]);
}