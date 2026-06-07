// 21. Implicit Object Return

const createUser = (id, username) => ({
    id,
    username,
    status: "Active"
});

console.log("21. Generated Object:", createUser(101, "vini_dev"));


// 22. Filter Objects (Method Composition)

const students = [
    { name: "Ana", grade: 8.5 },
    { name: "Pedro", grade: 5.0 },
    { name: "Maria", grade: 9.2 }
];

const approved = students
    .filter(student => student.grade >= 7)
    .map(student => student.name);

console.log("22. Approved Students:", approved);


// 23. Descending Sort

const prices = [45, 12, 89, 5, 110];

prices.sort((a, b) => b - a);

console.log("23. Prices (Highest to Lowest):", prices);


// 24. Chaining Methods

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((acc, n) => acc + n, 0);

console.log("24. Chaining Result:", result);
// Output: 60


// 25. Multiplier Generator (Closure)

const createMultiplier = x => y => x * y;

const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log("25. Triple 10:", triple(10));
console.log("25. Quadruple 10:", quadruple(10));


// 26. Data Formatting (Split + Destructuring)

const dateStrings = [
    "15/05/2024",
    "20/12/2025",
    "01/01/2026"
];

const dateObjects = dateStrings.map(date => {
    const [day, month, year] = date.split("/");

    return {
        day,
        month,
        year
    };
});

console.table(dateObjects);


// 27. Occurrence Counter (Reduce)

const items = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];

const countedStock = items.reduce((counter, fruit) => {

    counter[fruit] = (counter[fruit] || 0) + 1;

    return counter;

}, {});

console.log("27. Item Frequency:", countedStock);


// 28. Higher-Order Function

const calculate = (a, b, operation) =>
    operation(a, b);

const sum = (x, y) => x + y;

const power = (x, y) => Math.pow(x, y);

console.log(
    "28. Using Sum:",
    calculate(5, 5, sum)
);

console.log(
    "28. Using Power:",
    calculate(2, 3, power)
);


// 29. Student Average Grades

const reportCard = [
    {
        name: "Joao",
        grades: [7, 8, 9]
    },
    {
        name: "Bia",
        grades: [10, 9, 10]
    }
];

const finalAverages = reportCard.map(student => ({
    name: student.name,
    average: (
        student.grades.reduce(
            (acc, grade) => acc + grade,
            0
        ) / student.grades.length
    ).toFixed(1)
}));

console.log(
    "29. Final Averages:",
    finalAverages
);


// 30. Context Simulation (this)

class TimeCounter {

    constructor() {
        this.seconds = 0;
    }

    start() {

        this.timer = setInterval(() => {

            this.seconds++;

            console.log(
                `30. Elapsed Time: ${this.seconds}s`
            );

            if (this.seconds >= 3) {
                clearInterval(this.timer);
            }

        }, 1000);
    }
}

const myClock = new TimeCounter();

myClock.start();