//3. Найдите сумму  1+2+3+…+n, где число n вводится пользователем с клавиатуры.
/*function getSum() {
  let n = Number(prompt("Введите число n:"));
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    console.log(i);
    sum += i;
  }
  return sum;
}

alert(getSum());*/

//4. Найдите произведение цифр трехзначного числа.

//function getTheResult() {
// let n = prompt("Enter number n:");
//let a = n.split("").reduce((acc, num) => {
//  return acc * num;
//}, 1);
// return a;
//}

//alert(getTheResult());

//5. Найдите количество четных цифр данного натурального числа.
/*function countEvenNumbers() {
  let count = 0;
  let number = prompt("Enter number a:");
  let a = number.split("");
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
      count++;
    }
  }
  return count;
}

alert(countEvenNumbers());*/

//5. Найдите количество четных цифр данного натурального числа с помощью map.

/*function countEvenNumbers() {
  let newArr = [];
  let n = prompt("Enter number n:");
  let a = n.split("");
  let result = a.map(function (num) {
    if (num % 2 == 0) {
      newArr += num;
    }
    return newArr;
  });
  return newArr.length;
}

alert(countEvenNumbers());*/

//6. Найдите наибольшую цифру данного натурального числа.
//function getTheBiggestNumber() {

//}

//7. Найдите все четырехзначные числа, сумма цифр каждого из которых равна 15.

//function getSumOfDigits() {
//let arrOfNumbers = [];
//let n = 9999;
//for (let i = 1000; i <= n; i++) {
//arrOfNumbers.push(i.split(""));
//}
//let newArr = arrOfNumbers.reduce((acc, num) => {
//if ((acc += num == 15)) {
//return acc;
//}
//console.log(acc);
//}, 0);
// return newArr;
//}
//alert(getSumOfDigits());

/*Object.prototype.newProp = "45345345";

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
};


function isEmpty(obj) {
  for (let key in obj) {
    console.log(key);
  }
}

console.log(isEmpty(person));*/

/*Object.prototype.newProp = "45345345";

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
};

function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key);
    }
  }
}
console.log(person);
console.log(isEmpty(person));*/

/*const Library = function (options) {
  this.name = options.name;
  this.author = options.author;
  this.year = options.year;
  this.reader = options.reader;
};

const book = new Library({
  name: "A Christmas Carol",
  author: ["Charles", "Dickens"],
  year: 1843,
  reader: null,
});

Library.prototype.isAvailable = function () {
  if (this.reader == null) {
    console.log("book is available");
    return true;
  }
  return false;
};

Library.prototype.takeBook = function (readerName) {
  if (this.reader == null) {
    this.reader = prompt("readerName:", ``);
    return Object.defineProperty(book, "reader", { value: this.reader });
  }

  return false;
};

Library.prototype.returnBook = function () {
  if (this.reader !== null) {
    return Object.defineProperty(book, "reader", { value: null });
  }

  return false;
};

Library.prototype.changeBookName = function (newBookName) {
  if ((this.name = " ")) {
    this.name = prompt("new book name:", ``);
    return Object.defineProperty(book, "name", { value: this.name });
  }
  return false;
};

Library.prototype.changeAuthorName = function (newAuthorName) {
  if ((this.author = " ")) {
    this.author = prompt("new author name:", ``);
    return Object.defineProperty(book, "author", { value: this.author });
  }
  return false;
};

Library.prototype.getCurrentReader = function () {
  if (this.reader !== null) {
    return this.reader;
  }
  return (this.reader = null);
};
console.log(book);
console.log(book.isAvailable());*/

//let d;
//d = new Date(1695429083399);
//console.log(d);

/*const Person = function (options) {
  this.firstName = options.firstName;
  this.lastName = options.lastName;
  this.dateOfBirth = options.dateOfBirth;
};

Person.prototype.getAge = function () {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let dob = new Date(this.dateOfBirth);
  let dobnow = new Date(dob.getFullYear(), dob.getMonth(), dob.getDate());
  let age = today.getFullYear() - dob.getFullYear();

  return age;
};

class Account {
  constructor(options2) {
    this.person = options2.person;
    this.amount = options2.amount;
  }
}

Account.prototype.addMoney = function (amount, description) {
  let result = 0;
  result = amount + this.amount;
  return result + description;
};

Account.prototype.withdrawMoney = function (amount, description) {
  let result = 0;
  result = amount + this.amount;
  return result + description;
};

Account.prototype.getAmount = function () {
  return this.amount;
};

Account.prototype.getAccountHistory = function () {};

Account.prototype.transfer = function (fromAccount, toAccount, amount) {
  if (fromAccount == alexAccount && toAccount == helenAccount) {
    return (helenAccount.amount += amount);
  } else if (fromAccount == helenAccount && toAccount == alexAccount) {
    return (alexAccount.amount += amount);
  }
};

const alex = new Person({
  firstName: "Alexey",
  lastName: "Petrov",
  dateOfBirth: "1994-11-22",
});
const alexAccount = new Account({ person: "alex", amount: 1000 });

const helen = new Person({
  firstName: "Helen",
  lastName: "Smith",
  dateOfBirth: "1990-06-06",
});
const helenAccount = new Account({ person: "helen", amount: 400 });

console.log(helenAccount);

console.log(helen.getAge());*/

/*Написать функцию чанк, которая принимает массив и какое кол-во элементов должно быть в чанке. Далее функция возвращает массив с массивами, как в комментах 

const data = [1, 2, 3, 5, 6, 7, 8, 9];
function chunk(arr, num) {
  const newArr = [];
  let i = 0;
  while (i < arr.length) {
    newArr.push(arr.slice(i, i + num));
    i += num;
  }
  return newArr;
}
console.log(chunk(data, 3));*/

/*function main() {
  setTimeout(function greet() {
    console.log("Hello!");
  }, 2000);
  console.log("Bye!");
}
main();*/

// Из исходного массива сделать объект, ключами которого будут все встречающиеся gender, а значениями массив объектов юзеров

/*const users = [
  {
    id: 1,
    name: "Виктория",
    gender: "female",
  },
  {
    id: 2,
    name: "Андрей",
    gender: "male",
  },
  {
    id: 3,
    name: "Александр",
    gender: "male",
  },
];*/

/*const func = (arr) => {
  let result = arr.reduce(function (acc, el) {
    if (el.hasOwnProperty("gender")) {
      acc[el.gender] = [];
    }
    acc[el.gender].push(el);
    return acc;
  }, {});
  return result;
};

console.log(func(users));*/

/*const func = (arr) => {
  let result = arr.reduce(function (acc, el) {
    if (el.gender) {
      acc[el.gender] = [];
    }
    acc[el.gender].push(el);
    return acc;
  }, {});
  return result;
};

console.log(func(users));*/

// дан массив, необходимо вернуть строку с ошибкой если одно из значений не является числом, если все значения верны, то возвращаем разность суммы чисел кратных 7 и максимально значения массива
const arr2 = [1, NaN, 21, 40, 50, 35, 2, NaN, 16, 17, NaN, 98, 77, 49];
const arr3 = [1, 11, 21, 40, 50, 35, 2, 6, 16, 17, 63, 98, 77, 49];

/*function getSumDifference(arr) {
  
    if (arr.every((el)=> !isNan(el)) 
      return 'текст ошибки'
     )
  

  let newArr = [];
  let sum = 0;
  let result = 0;

  arr.forEach((el) => {
    if (el % 7 == 0) {
      newArr.push(el);
      sum += el;
    }

    result = sum - Math.max(...arr);
  });
  return result;
}

console.log(getSumDifference(arr2));*/

/*function getSumDifference(arr) {
  if (arr.some((el) => isNaN(el))) {
    return "текст ошибки";
  }

  const sum = arr.reduce((acc, el) => {
    if (el % 7 == 0) {
      acc += el;
    }
    return acc;
  }, 0);
  return sum - Math.max(...arr);
}

console.log(getSumDifference(arr3));*/
