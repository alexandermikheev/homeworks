function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
      const hash = args.join(',');
      let objectInCache = cache.find(item => item.hash === hash); 
      if (objectInCache) { 
          console.log("Из кэша: " + objectInCache.value);
          return "Из кэша: " + objectInCache.value;
      }
  
      let result = func(...args);
      cache.push({hash: hash, value: result});
      if (cache.length > 5) { 
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
}


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  function wrapper(...args) {
    wrapper.allCount++;
    if(timeoutId){
      clearTimeout(timeoutId);
    }
    if (timeoutId === null) {
      wrapper.count++;
      func(...args);
    }
    timeoutId = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}

const setSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);
const upgradedSetSignal = debounceDecoratorNew(setSignal, 2000);
setTimeout(() => upgradedSetSignal(1, 0)); // Сигнал отправлен + будет запланирован асинхронный запуск, который будет проигнорирован так как следующий сигнал отменит предыдущий (300 - 0 < 2000)
setTimeout(() => upgradedSetSignal(2, 300), 300); // проигнорировано так как следующий сигнал отменит предыдущий (900 - 300 < 2000)
setTimeout(() => upgradedSetSignal(3, 900), 900); // проигнорировано так как следующий сигнал отменит предыдущий (1200 - 900 < 2000)
setTimeout(() => upgradedSetSignal(4, 1200), 1200); // проигнорировано так как следующий сигнал отменит предыдущий (2300 - 1200 < 2000)
setTimeout(() => upgradedSetSignal(5, 2300), 2300); // Сигнал отправлен так как следующий вызов не успеет отменить текущий: 4400-2300=2100 (2100 > 2000)
setTimeout(() => upgradedSetSignal(6, 4400), 4400); // проигнорировано так как следующий сигнал отменит предыдущий (4500 - 4400 < 2000)
setTimeout(() => upgradedSetSignal(7, 4500), 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с
setTimeout(() => {
  console.log(upgradedSetSignal.count); // было выполнено 3 отправки сигнала
  console.log(upgradedSetSignal.allCount); // было выполнено 6 вызовов декорированной функции
}, 7000);