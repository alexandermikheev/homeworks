// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  avg = 0;

  for (i = 0; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
    if(arr[i] > max){
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
  let sum;
  


  // Ваш код
  function worker(arr){
    for (i = 0; i < arr.length; i++){
      sum =+ arr[i];
    };
    return 
  }
console.log(sum);

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
