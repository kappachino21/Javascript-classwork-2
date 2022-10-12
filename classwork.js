function addition(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number")
    return "Invalid input";

  return num1 + num2;
}

function reverseArray(arr) {
  let reversedArray = arr.reverse();
  return reverseArray;
}

let items = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
  "item9",
  "item10",
];

items[2] = "items11";

items.splice(0, 5);

items.pop();
items.push();
items.shift();
items.unshift("items12");
let itemsNew = ["items13", "items14", "items15", "items16", "items17"];
items.concat(itemsNew);
items.splice(1, 2);
items.slice(2, 3);
items.reverse();
items.join(", ");
items.forEach((element) => console.log(element));
console.log(items.includes("items12"));
console.log(items.indexOf("items1"));

let numbersArray = [1, 2, 3, 4, 5];
function belowNumbers(num) {
  return num < 10;
}
numbersArray.every(belowNumbers);

function aboveFour(num) {
  return num > 4;
}

numbersArray.some(aboveFour);

function lessThanThree(num) {
  return num < 3;
}

numbersArray.filter(lessThanThree);

numbersArray.find(lessThanThree);

numbersArray.findIndex(lessThanThree);

numbersArray.sort();

function timesTwo(z) {
  return z * 2;
}

numbersArray.map(timesTwo);
