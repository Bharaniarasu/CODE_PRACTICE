interface Point {
  a: number;
  b: number;
  c: number;
}

const addNum = (point: Point) => {
  console.log(point.a);
};
addNum({ a: 1, b: 2, c: 3 });
