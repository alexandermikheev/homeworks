function solveEquation(a, b, c) {
  let arr =[];
  "use strict";
  if(a == 0)
    return false;
  let D = b * b - 4 * a * c;
  console.log(`D = ${D}`);
  if(D < 0)
      return arr =[];
  arr = D;
  if(D == 0)
    return arr = [-(b) / (2 * a)]; // если дискременант равен нулю. Один корень. 

  else if(D > 0){
    let tmp = [];
    tmp.push((-b + Math.sqrt(D)) / (2 * a)); //первый корень
    tmp.push((-b - Math.sqrt(D)) / (2 * a)); //второй корень
    arr = tmp;
}  
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  "use strict";
  let per = parseInt(percent) /100 /12; //Процентная ставка
  let con = parseInt(contribution); //Взнос
  let am = parseInt(amount); //общая стоимость

  if (isNaN(per) || per < 0) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(con) || con < 0) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(am) || am < 0) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }else {
			
    let today = new Date();
    if (today.getFullYear() > date.getFullYear() || today.getMonth() > date.getMonth()) {
    return `Параметр "срок ипотеки" содержит неправильное значение ${date}`;
  } else {
    let s = am - con;						  //тело кредита
      let n = date.getMonth() - today.getMonth() + (12*(date.getFullYear() - today.getFullYear())); //срок кредита в месяцах
      let pay = s*(per+per/(((1+per)**n)-1));			//ежемесячная оплата
      let totalAmount = (pay * n).toFixed(2);
      console.log(totalAmount);
     return +totalAmount;
   }	
  }
}
