let arr = [1, [2, [3, 4], 5], 6];

const operation = (num) => {
  if (num <= 1) {
    return num;
  } else {
    console.log("loops", num - 1 + (num - 2));
    return operation(num - 1) + operation(num - 2);
  }
};

console.log(operation(10));
