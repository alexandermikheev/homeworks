class PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    fix(){
       return this.state = this.state * 1.5
    }
    set state(stateNew){
        if(stateNew < 0){
            this._state = 0;
        }else if(stateNew > 100){
            this._state = 100;
        }else{
            this._state = stateNew;
        }
    }
    get state(){
       return this._state
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state = 100){
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}
class NovelBook  extends Book{
    constructor(name, releaseDate, pagesCount, state = 100, author){
        super(name, releaseDate, pagesCount, state, author);
        this.type = "novel";
    }
    
}
class FantasticBook  extends Book{
    constructor(name, releaseDate, pagesCount, state = 100, author){
        super(name, releaseDate, pagesCount, state, author);
        this.type = "fantastic";
    }
    
}
class DetectiveBook  extends Book{
    constructor(name, releaseDate, pagesCount, state = 100, author){
        super(name, releaseDate, pagesCount, state);
        this.type = "detective";
    }
    
}


class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }       
    }

    findBookBy(type, value) {
        let findBook = this.books.find(book => book[type] === value);
        if (typeof findBook === 'object') {
            return findBook;
        } else {
            return null;
        } 
    }

    giveBookByName(bookName) {
    let giveBook = this.books.find(book => book.name === bookName);
        if (typeof giveBook === 'object') {
            let index = this.books.indexOf(giveBook);
            this.books.splice(index, 1);
            return giveBook;
        } else {
            return null;
        }
    }
}
class Student {
    constructor(name) {
        this.name = name;
        this.journal = {};
    }
    
    setSubject(subjectName) {
        if (this.journal.hasOwnProperty(subjectName) === true) {
            return console.log("Предмет уже существует");
        } else {
            this.journal[subjectName] = [];
        }
    }

    addMark(mark, subjectName) {
        if (this.journal.hasOwnProperty(subjectName) !== true) {
            this.journal[subjectName] = [];
          console.log("Несуществующий предмет. Предмет создан");
        }
        if((typeof mark === "number") && (mark >= 1) && (mark <= 5)) {
            this.journal[subjectName].push(mark); 
        } else {
            return console.log("Ошибка, оценка должна быть числом от 1 до 5");
        }  
    }

    getAverageBySubject(subjectName) {
        if (this.journal.hasOwnProperty(subjectName) === true) {
          let sum = 0;
          let marks = this.journal[subjectName];
          marks.forEach((item, idx, marks) => sum += item);
          let averageBySubject = sum / marks.length;
          return averageBySubject;
        } else {
          return console.log("Несуществующий предмет");
        }
    }

    getAverage() { 
        let sum = 0;
        let marks = Object.values(this.journal);
        let resultMarks = [];
        marks.forEach((item, idx, marks) => resultMarks = [].concat(resultMarks, item));
        resultMarks.forEach((item, idx, resultMarks) => sum += item);
        let average = sum / resultMarks.length;
        return average;
    }
    
    exclude(reason) { 
        delete this.journal;
        this.excluded = reason;
    }
}