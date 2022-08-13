'use strict';

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
}

console.log(mergeSort([8, 4, 23, 42, 16, 15]));
console.log(mergeSort([20, 18, 12, 8, 5, -2]));
console.log(mergeSort([5, 12, 7, 5, 5, 7]));
console.log(mergeSort([2, 3, 5, 7, 13, 11]));

module.exports = mergeSort;