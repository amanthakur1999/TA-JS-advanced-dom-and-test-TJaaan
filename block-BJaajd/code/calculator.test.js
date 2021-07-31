const {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
} = require('./calculator');

test('substract 10 - 5 is equal to 5', () => {
  expect(subtract(10, 5)).toBe(5);
});

test('sum 4 + 5 is equal to 9', () => {
  expect(sum(4, 5)).toBe(9);
});

test('multiply 5 * 3 is equal to 15', () => {
  expect(multiply(3, 5)).toBe(15);
});

test('power 5 is equal to 25', () => {
  expect(power(5)).toBe(25);
});

test('factorial 2*3*4*5 is not equal to 100', () => {
  expect(factorial(2, 3, 4, 5)).not.toBe(100);
});
