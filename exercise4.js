// დავალება 1

let array = [1, 2, 3, 4, 5];
array.forEach(myFunction);
function myFunction(number) {
  return number;
}
console.log(myFunction(array));

// დავალება 2

let strArray = ["Name", "Age", "Proffesion"];

strArray.map(mapFunction);

function mapFunction(str) {
  return str.length;
}

console.log(mapFunction(strArray));

// დავალება 3

let filterArr = [1, 2, 3, 4, 5, 6, 7, 8];

let filteredArr = filterArr.filter((num) => num % 2 === 0);

console.log(filteredArr);

// დავალება 4

let personArr = {
  name: "Torike",
  age: 20,
};

let personAge = personArr.find(() => personArr.age);

console.log(personAge);

// დავალება 5

let findArr = [4, 32, 7, 11, 41, 6];

let moreThanTen = findArr.find((num) => num > 10);

console.log(moreThanTen);

// დავალება 6

let positiveArr = [1, 2, -3, -5, 2, 32];

let check = positiveArr.every((num) => num > 0);

console.log(check);

// დავალება 7

let alphabetArr = ["P", "D", "Z", "A", "R"];

console.log(alphabetArr.sort());

// დავალება 8

const person = {
  name: "Marshall",
  age: 31,
  job: "Lawyer",
};

console.log(Object.keys(person));

// დავალება 9

console.log(Object.values(person));

// დავალება 10

console.log(Object.entries(person));

// დავალება 11

const items = {
  apple: 32,
  orange: 12,
  kiwi: 26,
  carrot: 15,
};

const itemsPrice = 0;

const sum = items.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  itemsPrice
);

console.log(Object.values(sum));
