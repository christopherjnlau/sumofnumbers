
const test = [6, 7, 4, 3];

function sumFor(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sumFor(test));

function sumWhile(array) {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(test));

function sumRecursion(array) {
  if (array.length === 0) {
    return 0;
  }

  return array[0] + sumRecursion(array.slice(1, array.length));
}

console.log(sumRecursion(test));

function sumTheSimpleWay(array) {
  return _.reduce(array, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(test));
