// 1. Double Values

const nums = [1, 2, 3, 4, 5];

const doubled = nums.map(n => n * 2);

console.log("1. Doubled:", doubled);
// [2, 4, 6, 8, 10]

// 2. Capitalize Names

const names = ["ana", "john", "maria"];

const capitalized = names.map(
  n => n[0].toUpperCase() + n.slice(1)
);

console.log("2. Capitalized:", capitalized);
// ["Ana", "John", "Maria"]

// 3. Array Destructuring

const fruits = ["Apple", "Banana"];

const [fruit1, fruit2] = fruits;

console.log("3. Extracted Fruits:", fruit1, "and", fruit2);
// Apple and Banana

// 4. Swap Variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log("4. Swapped: a =", a, "b =", b);
// a = 2 b = 1

// 5. Person Object

const person = {
  name: "Ana",
  age: 25
};

const { name } = person;

console.log("5. Extracted Name:", name);
// Ana

// 6. Map with Index

const items = ["Notebook", "Pencil", "Eraser"];

const formattedList = items.map(
  (value, index) => `Index ${index}: Value ${value}`
);

console.log("6. Formatted List:", formattedList);

// 9. Default Value Destructuring

const config = {};

const { color = "black" } = config;

console.log("9. Default Color:", color);
// black

// 10. Rest Operator

const values = [10, 20, 30, 40];

const [first, ...others] = values;

console.log("10. First:", first, "| Others:", others);
// 10 | [20, 30, 40]