function parseCount(num) {
    if (isNaN(parseInt(num, 10))) {
        throw new Error("Невалидное значение");
    } else {
        return parseInt(num, 10);
    }
}
function validateCount(num) {
    try {
        return parseCount(num);
    } catch(error) {
        return error;
    }
}

class Triangle {
    constructor(sideA, sideB, sideC) {
        if ((sideA + sideB) < sideC || (sideB + sideC) < sideA || (sideC + sideA) < sideB){
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
            this.sideA = sideA;
            this.sideB = sideB;
            this.sideC = sideC;
        }
    }
    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
    getArea(){
        let semiP = this.getPerimeter()/2;
        return Number(Math.sqrt(semiP * (semiP - this.sideA) * (semiP - this.sideB) * (semiP - this.sideC)).toFixed(3));
    }
}

function getTriangle (sideA, sideB, sideC) {
    try {
        return new Triangle (sideA, sideB, sideC);
    } catch {
        return {
           getArea: () => "Ошибка! Треугольник не существует",
           getPerimeter: () => "Ошибка! Треугольник не существует"
       }
    }
}