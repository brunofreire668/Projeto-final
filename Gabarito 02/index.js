// 11. Filter Positive Numbers

const numbers = [-5, 10, -2, 15, -1, 3];

const positives = numbers.filter(n => n > 0);

console.log("11. Positive Numbers:", positives);
// Output: [10, 15, 3]

// 12. Names in Uppercase

const names = ["ana", "beto", "caio"];

const uppercaseNames = names.map(n => n.toUpperCase());

console.log("12. Uppercase Names:", uppercaseNames);
// Output: ['ANA', 'BETO', 'CAIO']

// 13. Find User

const users = [
  { id: 1, name: "A" },
  { id: 3, name: "B" }
];

const foundUser = users.find(u => u.id === 3);

console.log("13. User ID 3:", foundUser);
// Output: { id: 3, name: "B" }

// 14. Tax Calculation (15%)

const prices = [100, 200, 300];

const pricesWithTax = prices.map(p => p * 1.15);

console.log("14. Prices with Tax:", pricesWithTax);
// Output: [115, 230, 345]

// 17. Cart Total (Reduce)

const cartTotal = prices.reduce(
  (accumulator, price) => accumulator + price,
  0
);

console.log("17. Cart Total:", cartTotal);
// Output: 600

// 20. Object Short Syntax

const createProduct = (name, category) => ({
  name,
  category
});

console.log(
  "20. New Object:",
  createProduct("Keyboard", "IT")
);
// Output: { name: "Keyboard", category: "IT" }