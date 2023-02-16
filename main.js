const input = require('sync-input');

let ingredient = [400, 540, 120, 9, 550];
const nameIng = ["water", "milk", "beans", "cups"];
const coffees = [
    [250, 0, 16, 1, -4],
[350, 75, 20, 1, -7],
    [200, 100, 12, 1, -6]
];
function checkCups(choice) {
 switch (choice) {
  case 1:
   if (ingredient[0] >= coffees[choice - 1][0] && ingredient[1] >= coffees[choice - 1][1] &&
       ingredient[2] >= coffees[choice - 1][2] && ingredient[3] >= 1) return true;
   return false;
  case 2:
   if (ingredient[0] >= coffees[choice - 1][0] && ingredient[1] >= coffees[choice - 1][1] &&
       ingredient[2] >= coffees[choice - 1][2] && ingredient[3] >= 1) return true;
   return false;
  case 3:
   if (ingredient[0] >= coffees[choice - 1][0] && ingredient[1] >= coffees[choice - 1][1] &&
       ingredient[2] >= coffees[choice - 1][2] && ingredient[3] >= 1) return true;
   return false;
 }
}
function getNotEnoughIng(choice) {
 for (let i = 0; i < ingredient.length; i++) {
  if (ingredient[i] < coffees[choice - 1][i]) {
   if (coffees[choice - 1][i] == 0) continue;
   else return nameIng[i];
  }
 }
}
function buyEspresso(choice) {

 if (checkCups(choice)) {
  console.log("I have enough resources, making you a coffee!\n");
  for (let i = 0; i < ingredient.length; i++) {
   ingredient[i] -= coffees[choice - 1][i];
  }
 } else console.log(`Sorry, not enough ${getNotEnoughIng(choice)}!\n`);
}
function buy() {
 let choice = input("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: \n");

 if (choice != "back") buyEspresso(parseInt(choice));
}
function menu() {
 let choice = input("Write action (buy, fill, take, remaining, exit):\n");
 switch (choice) {
  case "buy":
   buy();
   return true;
  case "fill":
   fill();
   return true;
  case "take":
   take();
   return true;
  case "remaining":
   printIng();
   return true;
  case "exit":
   return false;
 }

}

function programStart() {
 while(menu());
 }
 function printIng() {
  console.log(`\nThe coffee machine has:\n${ingredient[0]} ml of water`);
  console.log(`${ingredient[1]} ml of milk\n${ingredient[2]} g of coffee beans`);
  console.log(`${ingredient[3]} disposable cups\n$${ingredient[4]} of money\n`);
 }
 function fill() {
  ingredient[0] += parseInt(input("Write how many ml of water you want to add:"));
  ingredient[1] += parseInt(input("Write how many ml of milk you want to add:"));
  ingredient[2] += parseInt(input("Write how many grams of coffee beans you want to add:"));
  ingredient[3] += parseInt(input("Write how many disposable cups you want to add:"));
  console.log();
 }
 function take() {
 console.log(`I gave you $${ingredient[4]}\n`);
 ingredient[4] = 0;
 }

programStart();