const subtractArray = require('./file');


test('check if it returns an empty array given two empty arrays', () => {
  expect(subtractArray([], [])).toEqual([]);
})

test('subtracts an array from another', () => {
  var first = ['a', 'b', 'b', 'r'];
  var second = ['a', 'b', 'k', 'c'];


  expect(subtractArray(first, second)).toEqual(['r']);
})

test('subtracts an array from another', () => {
  var first = ['a', 'b', 'b', 'r'];
  var second = ['a', 'c'];


  expect(subtractArray(first, second)).toEqual(['b','b','r']);
})