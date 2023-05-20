const array = [
  {
    name: "Hari",
    age: 15,
  },
  {
    name: "Kumar",
    age: 30,
  },
  { name: "Bala", age: 23 },
  {
    name: "Muthu",
    age: 17,
  },
];

const sortByAge = (arr) => {
  return arr.filter((element) => {
    return element.age < 18;
  });
};

console.log(sortByAge(array));
