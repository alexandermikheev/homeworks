// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];

  }
  avg = parseFloat((sum / arr.length).toFixed(2));

  // Ваш код

  return { min: min, max: max, avg: avg };
};


// Задание 2
function worker(arr) {
  let sum = 0;
  arr.forEach(item => sum += item);
  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = -Infinity;

  for (let item of arrOfArr) {
    let result = worker(item);
    max = max > result ? max : result;
  }
  return max;
}

// Задание 3
function worker2(arr) {
  return getArrayParams(arr).max - getArrayParams(arr).min
}
